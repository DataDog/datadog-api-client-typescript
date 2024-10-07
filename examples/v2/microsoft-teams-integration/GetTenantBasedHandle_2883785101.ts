/**
 * Get api handle information returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

// there is a valid "tenant_based_handle" in the system
const TENANT_BASED_HANDLE_DATA_ID = process.env
  .TENANT_BASED_HANDLE_DATA_ID as string;

const params: v2.MicrosoftTeamsIntegrationApiGetTenantBasedHandleRequest = {
  handleId: TENANT_BASED_HANDLE_DATA_ID,
};

apiInstance
  .getTenantBasedHandle(params)
  .then((data: v2.MicrosoftTeamsTenantBasedHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
