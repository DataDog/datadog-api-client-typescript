/**
 * Get tenant-based handle information returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiGetTenantBasedHandleRequest = {
  handleId: "handle_id",
};

apiInstance
  .getTenantBasedHandle(params)
  .then((data: v2.MicrosoftTeamsTenantBasedHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
