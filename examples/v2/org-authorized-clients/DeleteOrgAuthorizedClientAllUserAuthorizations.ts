/**
 * Delete a user's authorizations for a client returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgAuthorizedClientsApi(configuration);

const params: v2.OrgAuthorizedClientsApiDeleteOrgAuthorizedClientAllUserAuthorizationsRequest =
  {
    orgAuthorizedClientId: "00000000-0000-0000-0000-000000000001",
    userId: "00000000-0000-9999-0000-000000000001",
  };

apiInstance
  .deleteOrgAuthorizedClientAllUserAuthorizations(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
