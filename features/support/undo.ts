import fs from "fs";
import path from "path";
import { getProperty, pathLookup } from "./templating";
import * as datadogApiClient from "../../index";

import log from "loglevel";
log.setLevel(process.env.DEBUG ? "debug" : "warn");

interface iOperationParameter {
  name: string;
  source: string;
  template: string;
}

interface iUndo {
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
  response: any
): { (): void } {
  return async function () {
    const apiName = operationUndo.tag.replace(/\s/g, "");
    const operationName = operationUndo.undo.operationId.toOperationName();

    const api = getProperty(datadogApiClient, apiVersion);
    const configurationOpts = {
      authMethods: {
        apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
        appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
      },
      httpConfig: { compress: false },
    };
    if (process.env.DD_TEST_SITE) {
      const server = api.servers[2];
      const serverConf = server.getConfiguration();
      server.setVariables({
        site: process.env.DD_TEST_SITE,
      } as typeof serverConf);
      (configurationOpts as any)["baseServer"] = server;
    }
    if (process.env.DD_TEST_SITE_URL) {
      const serverConf = api.servers[1].getConfiguration();
      api.servers[1].setVariables({
        name: process.env.DD_TEST_SITE_URL,
        protocol: "http",
      } as typeof serverConf);
      (configurationOpts as any)["serverIndex"] = 1;
    }
    const configuration = api.createConfiguration(configurationOpts);
    const apiInstance = new (api as any)[`${apiName}Api`](configuration);

    // perform operation
    const opts: { [key: string]: any } = {};
    for (const p of operationUndo.undo.parameters) {
      if (p.source !== undefined) {
        opts[p.name.toAttributeName()] = pathLookup(response, p.source);
      } else if (p.template !== undefined) {
        const data = JSON.parse(p.template.templated(response));
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
        log.error(`could not undo operation ${operationOrig}: ${error}`);
    }
  };
}

export { UndoActions, buildUndoFor };
