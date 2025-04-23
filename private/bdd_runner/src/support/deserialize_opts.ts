import fs from "fs";
import path from "path";

import { getProperty } from "./templating";
import { ScenariosModelMappings } from "./scenarios_model_mapping";
import * as datadogCommon from "@datadog/datadog-api-client";
import { apiNameToTypingInfoMapping } from "./api_info";

function deserializeOpts(
  opts: Record<string, any>,
  servicesDir: string,
  apiVersion: string,
  apiName: string,
  operationId: string,
): Record<string, any> {
  const typingInfo =
    apiNameToTypingInfoMapping[apiName + apiVersion.toUpperCase()];
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
