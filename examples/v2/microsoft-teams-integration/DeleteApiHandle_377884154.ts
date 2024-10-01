/**
 * Delete api handle returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

// there is a valid "api_handle" in the system
const API_HANDLE_DATA_ID = process.env.API_HANDLE_DATA_ID as string;

const params: v2.MicrosoftTeamsIntegrationApiDeleteApiHandleRequest = {
  handleId: API_HANDLE_DATA_ID,
};

apiInstance
  .deleteApiHandle(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
