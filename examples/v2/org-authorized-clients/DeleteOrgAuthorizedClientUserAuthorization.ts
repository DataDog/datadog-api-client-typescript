/**
 * Delete a user authorization for a client returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgAuthorizedClientsApi(configuration);

const params: v2.OrgAuthorizedClientsApiDeleteOrgAuthorizedClientUserAuthorizationRequest =
  {
    orgAuthorizedClientId: "00000000-0000-0000-0000-000000000001",
    userAuthorizedClientId: "00000000-0000-0000-0000-000000000002",
  };

apiInstance
  .deleteOrgAuthorizedClientUserAuthorization(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
