/**
 * Get an API returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOpenAPI"] = true;
const apiInstance = new v2.APIManagementApi(configuration);

// there is a valid "managed_api" in the system
const MANAGED_API_DATA_ID = process.env.MANAGED_API_DATA_ID as string;

const params: v2.APIManagementApiGetOpenAPIRequest = {
  id: MANAGED_API_DATA_ID,
};

apiInstance
  .getOpenAPI(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
