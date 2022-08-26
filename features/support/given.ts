import { Given } from "@cucumber/cucumber";
import { compressSync } from 'zstd.ts'

import fs from "fs";
import path from "path";

import { World } from "../support/world";
import { fixKeys, getProperty, pathLookup } from "./templating";
import { UndoActions, buildUndoFor } from "./undo";
import * as datadogApiClient from "../../index";

interface IOperationParameter {
  name: string;
  source?: string;
  value?: string;
}

interface IGivenStep {
  tag: string;
  key: string;
  step: string;
  operationId: string;
  parameters: IOperationParameter[];
  source?: string;
}

const Versions = ["v1", "v2"] as const;

for (const apiVersion of Versions) {
  const content = fs
    .readFileSync(path.join(__dirname, `../${apiVersion}/given.json`))
    .toString();
  const givenSteps = JSON.parse(content) as IGivenStep[];
  for (const operation of givenSteps) {
    Given(operation.step, async function (this: World) {
      const apiName: string = operation.tag.replace(/\s/g, "");
      const operationName: string = operation.operationId.toOperationName();

      // make sure we have a fresh instance of API client and configuration
      const api = getProperty(datadogApiClient, apiVersion);
      const configurationOpts = {
        authMethods: {
          apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
          appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
        },
        httpConfig: { compress: false },
        zstdCompressorCallback: (body: string) => compressSync({input: Buffer.from(body, "utf8")}),
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

      // find undo method
      const undoAction = UndoActions[apiVersion][operation.operationId];
      if (undoAction === undefined) {
        throw new Error(
          `missing undo for ${operation.operationId} in ${apiVersion}`
        );
      }

      // enable unstable operation
      // TODO given_configuration.unstable_operations[operation_name.to_sym] = true

      // perform operation
      const opts: { [key: string]: any } = {};

      if (operation.parameters !== undefined) {
        for (const p of operation.parameters) {
          if (p.value !== undefined) {
            opts[p.name.toAttributeName()] = JSON.parse(
              p.value?.templated(this.fixtures),
              fixKeys
            );
          }
          if (p.source !== undefined) {
            opts[p.name.toAttributeName()] = pathLookup(
              this.fixtures,
              p.source
            );
          }
        }
      }

      let result: any = {};
      // example: await v1.IPRangesApi(v1.createConfiguration({authMethod: {...}})).getIPRanges({});
      if (Object.keys(opts).length) {
        result = await apiInstance[operationName](opts);
      } else {
        result = await apiInstance[operationName]();
      }

      // register undo method
      if (undoAction.undo.type == "unsafe") {
        this.undo.push(
          buildUndoFor(apiVersion, undoAction, operationName, result)
        );
      }

      // optional re-shaping
      if (operation["source"] !== undefined) {
        result = pathLookup(result, operation["source"]);
      }

      // store response in fixtures
      if (operation["key"] !== undefined) {
        this.fixtures[operation["key"]] = result;
      }
      
      await this.sleepAfterRequest();
    });
  }
}

export { IOperationParameter, IGivenStep };
