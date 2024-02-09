/**
 * Update an API returns "API updated successfully" response
 */

import * as fs from "fs";
import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOpenAPI"] = true;
const apiInstance = new v2.APIManagementApi(configuration);

// there is a valid "managed_api" in the system
const MANAGED_API_DATA_ID = process.env.MANAGED_API_DATA_ID as string;

const params: v2.APIManagementApiUpdateOpenAPIRequest = {
  id: MANAGED_API_DATA_ID,
  openapiSpecFile: {
    data: Buffer.from(fs.readFileSync("openapi-spec.yaml", "utf8")),
    name: "openapi-spec.yaml",
  },
};

apiInstance
  .updateOpenAPI(params)
  .then((data: v2.UpdateOpenAPIResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
