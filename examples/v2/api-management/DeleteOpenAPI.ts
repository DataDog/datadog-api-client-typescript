/**
 * Delete an API returns "API deleted successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteOpenAPI"] = true;
const apiInstance = new v2.APIManagementApi(configuration);

// there is a valid "managed_api" in the system
const MANAGED_API_DATA_ID = process.env.MANAGED_API_DATA_ID as string;

const params: v2.APIManagementApiDeleteOpenAPIRequest = {
  id: MANAGED_API_DATA_ID,
};

apiInstance
  .deleteOpenAPI(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
