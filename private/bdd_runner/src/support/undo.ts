import fs from "fs";
import { pathLookup, tagToApiClassName } from "./templating";
import * as datadogCommon from "@datadog/datadog-api-client";

import log from "loglevel";
import { apiTypes } from "./api_info";
const logger = log.getLogger("testing");
logger.setLevel(process.env.DEBUG ? logger.levels.DEBUG : logger.levels.INFO);

interface iOperationParameter {
  name: string;
  origin: string;
  source: string;
  template: string;
}

interface iUndo {
  tag: string;
  type: "safe" | "unsafe" | "idempotent";
  operationId: string;
  parameters: iOperationParameter[];
}

interface iUndoAction {
  tag: string;
  undo: iUndo;
}

const UndoActions: {
  [version: string]: { [operationId: string]: iUndoAction };
} = {};
for (const [apiVersion, undoFile] of Object.entries(
  JSON.parse(process.env.BDD_RUNNER_UNDO_ACTIONS || "{}"),
)) {
  const content = fs.readFileSync(undoFile as string).toString();
  UndoActions[apiVersion] = JSON.parse(content) as {
    [index: string]: iUndoAction;
  };
}

function buildUndoFor(
  apiVersion: string,
  operationUndo: iUndoAction,
  operationOrig: string,
  response: any,
  request: any,
  servicesDir: string,
): { (): void } {
  return async function () {
    const apiName: string = tagToApiClassName(operationUndo.tag);
    const operationName = operationUndo.undo.operationId.toOperationName();
    const apiNameWithVersion = `${apiName}${apiVersion.toUpperCase()}`;
    const api = apiTypes[apiNameWithVersion];
    const configurationOpts = {
      authMethods: {
        apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
        appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
      },
      httpConfig: { compress: false },
      enableRetry: true,
    };
    if (process.env.DD_TEST_SITE) {
      const server = datadogCommon.servers[2];
      const serverConf = server.getConfiguration();
      server.setVariables({
        site: process.env.DD_TEST_SITE,
      } as typeof serverConf);
      (configurationOpts as any)["baseServer"] = server;
    }
    if (process.env.DD_TEST_SITE_URL) {
      const serverConf = datadogCommon.servers[1].getConfiguration();
      datadogCommon.servers[1].setVariables({
        name: process.env.DD_TEST_SITE_URL,
        protocol: "http",
      } as typeof serverConf);
      (configurationOpts as any)["serverIndex"] = 1;
    }
    const configuration = datadogCommon.createConfiguration(configurationOpts);
    if (`${apiVersion}.${operationName}` in configuration.unstableOperations) {
      configuration.unstableOperations[`${apiVersion}.${operationName}`] = true;
    }
    const apiInstance = new api(configuration);
    // perform operation
    const opts: { [key: string]: any } = {};
    for (const p of operationUndo.undo.parameters) {
      let dataSource: { [key: string]: any };
      if (p.origin === undefined) {
        dataSource = response;
      } else if (p.origin === "request") {
        dataSource = request.body;
      } else {
        dataSource = response;
      }
      if (p.source !== undefined) {
        opts[p.name.toAttributeName()] = pathLookup(dataSource, p.source);
      } else if (p.template !== undefined) {
        const data = JSON.parse(p.template.templated(dataSource));
        const param: { [key: string]: any } = {};
        for (const [key, value] of Object.entries(data)) {
          param[key.toAttributeName()] = value;
        }
        opts[p.name.toAttributeName()] = param;
      }
    }
    try {
      await apiInstance[operationName](opts);
    } catch (error) {
      logger.debug(`could not undo operation ${operationOrig}: ${error}`);
    }
  };
}

export { UndoActions, buildUndoFor };
