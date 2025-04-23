import fs from "fs";
import path from "path";

import { getProperty } from "./templating";
import { ScenariosModelMappings } from "./scenarios_model_mapping";
import * as datadogCommon from "@datadog/datadog-api-client";
import { apiNameToServiceNameMapping } from "./api_info";

import { TypingInfo } from "@datadog/datadog-api-client-dashboard-lists/dist/v2/models/TypingInfo";

function deserializeOpts(
  opts: Record<string, any>,
  servicesDir: string,
  apiVersion: string,
  apiName: string,
  operationId: string,
): Record<string, any> {
  const typingInfo = require(
    `${servicesDir}/${apiNameToServiceNameMapping[apiName]}/dist/${apiVersion}/models/TypingInfo`,
  )["TypingInfo"];
  Object.keys(opts).forEach((key) => {
    const mapping = getProperty(
      ScenariosModelMappings[
        `${apiName}.${apiVersion.toUpperCase()}.${operationId}`
      ],
      key,
    );
    if (typeof mapping === "string") {
      return;
    }
    if (mapping.type === "HttpFile" && mapping.format === "binary") {
      opts[key] = {
        data: Buffer.from(
          fs.readFileSync(path.join(__dirname, `../${apiVersion}`, opts[key])),
        ),
        name: opts[key],
      };
    } else {
      opts[key] = datadogCommon.deserialize(
        opts[key],
        typingInfo,
        mapping.type,
        mapping.format,
      );
    }
  });

  return opts;
}

export { deserializeOpts };
