/**
 * List users with an identity provider override returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IdentityProvidersApi(configuration);

const params: v2.IdentityProvidersApiListIdentityProviderUsersRequest = {
  idpId: "00000000-0000-0000-0000-000000000001",
};

(async () => {
  try {
    for await (const item of apiInstance.listIdentityProviderUsersWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
