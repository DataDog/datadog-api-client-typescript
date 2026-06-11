/**
 * List user authorizations for a client returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgAuthorizedClientsApi(configuration);

const params: v2.OrgAuthorizedClientsApiListOrgAuthorizedClientUserAuthorizationsRequest =
  {
    orgAuthorizedClientId: "00000000-0000-0000-0000-000000000001",
  };

(async () => {
  try {
    for await (const item of apiInstance.listOrgAuthorizedClientUserAuthorizationsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
