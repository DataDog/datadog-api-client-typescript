/**
 * Create a new API returns "API created successfully" response
 */

import * as fs from "fs";
import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOpenAPI"] = true;
const apiInstance = new v2.APIManagementApi(configuration);

const params: v2.APIManagementApiCreateOpenAPIRequest = {
  openapiSpecFile: {
    data: Buffer.from(fs.readFileSync("openapi-spec.yaml", "utf8")),
    name: "openapi-spec.yaml",
  },
};

apiInstance
  .createOpenAPI(params)
  .then((data: v2.CreateOpenAPIResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
