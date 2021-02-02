import { Given } from "@cucumber/cucumber";

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
type VersionsType = typeof Versions[number];

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
      const configuration = api.createConfiguration({
        authMethods: {
          apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
          appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
        },
      });
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
          let value: any;
          if (p.value !== undefined) {
            opts[p.name.toAttributeName()] = JSON.parse(
              p.value?.templated(this.fixtures), fixKeys
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

      // example: await v1.IPRangesApi(v1.createConfiguration({authMethod: {...}})).getIPRanges({});
      let result = await apiInstance[operationName](opts);

      // register undo method
      if (undoAction.undo.type == "unsafe") {
        this.undo.push(buildUndoFor(apiVersion, undoAction, result));
      }

      // optional re-shaping
      if (operation["source"] !== undefined) {
        result = pathLookup(result, operation["source"]);
      }

      // store response in fixtures
      if (operation["key"] !== undefined) {
        this.fixtures[operation["key"]] = result;
      }
    });
  }
}

export { IOperationParameter, IGivenStep };
