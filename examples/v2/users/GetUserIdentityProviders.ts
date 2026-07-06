/**
 * Get identity provider overrides for a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiGetUserIdentityProvidersRequest = {
  userId: "00000000-0000-9999-0000-000000000000",
};

apiInstance
  .getUserIdentityProviders(params)
  .then((data: v2.UserOverrideIdentityProvidersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
