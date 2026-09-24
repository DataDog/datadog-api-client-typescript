/**
 * List users with an identity provider override returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.IdentityProvidersApi(configuration);

const params: v2.IdentityProvidersApiListIdentityProviderUsersRequest = {
  idpId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .listIdentityProviderUsers(params)
  .then((data: v2.UsersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
