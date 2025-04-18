import fs from "fs";
import path from "path";

import { apiClassNameToServicePackageDirName, getProperty } from "./templating";
import { ScenariosModelMappings } from "./scenarios_model_mapping";

function deserializeOpts(
  opts: Record<string, any>,
  servicesDir: string,
  apiVersion: string,
  apiName: string,
  operationId: string,
): Record<string, any> {
  const objectSerializer = require(
    `${servicesDir}/${apiClassNameToServicePackageDirName(apiName)}/src/${apiVersion}/models/ObjectSerializer`,
  )["ObjectSerializer"];
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
      opts[key] = objectSerializer.deserialize(
        opts[key],
        mapping.type,
        mapping.format,
      );
    }
  });

  return opts;
}

export { deserializeOpts };
