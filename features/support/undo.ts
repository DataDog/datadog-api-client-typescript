import fs from "fs";
import path from "path";
import { getProperty, pathLookup } from "./templating";
import * as datadogApiClient from "../../index";

import log from "loglevel";
const logger = log.getLogger("testing")
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
for (const apiVersion of ["v1", "v2"]) {
  const content = fs
    .readFileSync(path.join(__dirname, `../${apiVersion}/undo.json`))
    .toString();
  UndoActions[apiVersion] = JSON.parse(content) as {
    [index: string]: iUndoAction;
  };
}

function buildUndoFor(
  apiVersion: string,
  operationUndo: iUndoAction,
  operationOrig: string,
  response: any,
  request: any
): { (): void } {
  return async function () {
    let apiName = operationUndo.tag.replace(/[\s-]/g, "");
    if (operationUndo.undo.tag != null) {
      apiName = operationUndo.undo.tag.replace(/[\s-]/g, "");
    }
    const operationName = operationUndo.undo.operationId.toOperationName();

    const api = getProperty(datadogApiClient, apiVersion);
    const configurationOpts = {
      authMethods: {
        apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
        appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
      },
      httpConfig: { compress: false },
      enableRetry: true,
    };
    if (process.env.DD_TEST_SITE) {
      const server = datadogApiClient.client.servers[2];
      const serverConf = server.getConfiguration();
      server.setVariables({
        site: process.env.DD_TEST_SITE,
      } as typeof serverConf);
      (configurationOpts as any)["baseServer"] = server;
    }
    if (process.env.DD_TEST_SITE_URL) {
      const serverConf = datadogApiClient.client.servers[1].getConfiguration();
      datadogApiClient.client.servers[1].setVariables({
        name: process.env.DD_TEST_SITE_URL,
        protocol: "http",
      } as typeof serverConf);
      (configurationOpts as any)["serverIndex"] = 1;
    }
    const configuration = datadogApiClient.client.createConfiguration(configurationOpts);
    if (`${apiVersion}.${operationName}` in configuration.unstableOperations) {
      configuration.unstableOperations[`${apiVersion}.${operationName}`] = true;
    }
    const apiInstance = new (api as any)[`${apiName}Api`](configuration);

    // perform operation
    const opts: { [key: string]: any } = {};
    for (const p of operationUndo.undo.parameters) {
      let dataSource: { [key: string]: any; };
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
