/**
 * Get api handle information by name returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

// there is a valid "api_handle" in the system
const API_HANDLE_DATA_ATTRIBUTES_NAME = process.env
  .API_HANDLE_DATA_ATTRIBUTES_NAME as string;

const params: v2.MicrosoftTeamsIntegrationApiGetApiHandleByNameRequest = {
  handleName: API_HANDLE_DATA_ATTRIBUTES_NAME,
};

apiInstance
  .getApiHandleByName(params)
  .then((data: v2.MicrosoftTeamsApiHandleInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
