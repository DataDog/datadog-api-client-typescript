/**
 * Get handle information returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiGetApiHandleRequest = {
  handleId: "handle_id",
};

apiInstance
  .getApiHandle(params)
  .then((data: v2.MicrosoftTeamsApiHandleInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
