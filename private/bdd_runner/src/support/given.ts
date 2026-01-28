import { Given } from "@cucumber/cucumber";
import { compressSync } from "zstd.ts";

import fs from "fs";

import { World } from "../support/world";
import { pathLookup, tagToApiClassName } from "./templating";
import { UndoActions, buildUndoFor } from "./undo";
import * as datadogCommon from "@datadog/datadog-api-client";
import { deserializeOpts } from "./deserialize_opts";
import { apiTypes } from "./api_info";

interface IOperationParameter {
  name: string;
  source?: string;
  value?: string;
  origin?: string;
}

interface IGivenStep {
  tag: string;
  key: string;
  step: string;
  operationId: string;
  parameters: IOperationParameter[];
  source?: string;
}

for (const [apiVersion, givenFile] of Object.entries(
  JSON.parse(process.env.BDD_RUNNER_ADDITIONAL_GIVENS || "{}"),
)) {
  const content = fs.readFileSync(givenFile as string).toString();
  const givenSteps = JSON.parse(content) as IGivenStep[];
  for (const operation of givenSteps) {
    Given(operation.step, async function (this: World) {
      const apiName: string = tagToApiClassName(operation.tag);
      const operationName: string = operation.operationId.toOperationName();
      // make sure we have a fresh instance of API client and configuration
      const apiNameWithVersion = `${apiName}${apiVersion.toUpperCase()}`;
      const api = apiTypes[apiNameWithVersion];

      const configurationOpts = {
        authMethods: {
          apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
          appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
        },
        httpConfig: { compress: false },
        zstdCompressorCallback: (body: string) =>
          compressSync({ input: Buffer.from(body, "utf8") }),
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
      const configuration =
        datadogCommon.createConfiguration(configurationOpts);
      configuration.unstableOperations[
        `${apiName}.${apiVersion}.${operationName}`
      ] = true;

      const apiInstance = new api(configuration);
      // find undo method
      const undoAction = UndoActions[apiVersion][operation.operationId];
      if (undoAction === undefined) {
        throw new Error(
          `missing undo for ${operation.operationId} in ${apiVersion}`,
        );
      }
      // enable unstable operation
      // TODO given_configuration.unstable_operations[operation_name.to_sym] = true
      // perform operation
      let opts: { [key: string]: any } = {};
      if (operation.parameters !== undefined) {
        for (const p of operation.parameters) {
          if (p.value !== undefined) {
            const value = JSON.parse(
              p.value?.templated(this.fixtures),
            );
            opts[p.name.toAttributeName()] = value;

            // Store in pathParameters for undo operations with naming variants
            this.pathParameters[p.name] = value;
            this.pathParameters[p.name.toAttributeName()] = value;
          }
          if (p.source !== undefined) {
            const value = pathLookup(
              this.fixtures,
              p.source,
            );
            opts[p.name.toAttributeName()] = value;

            // Store in pathParameters for undo operations with naming variants
            this.pathParameters[p.name] = value;
            this.pathParameters[p.name.toAttributeName()] = value;
          }
          if (p.origin === "request") {
            for (const key in opts[p.name]) {
              if (opts[p.name].hasOwnProperty(key)) {
                this.fixtures[key] = opts[p.name][key];
              }
            }
          }
        }
      }
      // Deserialize obejcts into correct model types
      opts = deserializeOpts(
        opts,
        this.servicesDir,
        apiVersion,
        apiName,
        operation.operationId,
      );

      let result: any = {};
      if (Object.keys(opts).length) {
        result = await apiInstance[operationName](opts);
      } else {
        result = await apiInstance[operationName]();
      }
      // register undo method
      if (undoAction.undo.type == "unsafe") {
        this.undo.push(
          buildUndoFor(
            apiVersion,
            undoAction,
            operationName,
            result,
            opts,
            this.servicesDir,
            this.pathParameters,
          ),
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
