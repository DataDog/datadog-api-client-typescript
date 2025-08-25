/**
 * Get all API keys returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "api_key" in the system
const API_KEY_DATA_ATTRIBUTES_NAME = process.env
  .API_KEY_DATA_ATTRIBUTES_NAME as string;

const params: v2.KeyManagementApiListAPIKeysRequest = {
  filter: API_KEY_DATA_ATTRIBUTES_NAME,
};

apiInstance
  .listAPIKeys(params)
  .then((data: v2.APIKeysResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
