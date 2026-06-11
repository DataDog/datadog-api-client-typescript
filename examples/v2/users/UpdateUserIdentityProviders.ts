/**
 * Update identity provider overrides for a user returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiUpdateUserIdentityProvidersRequest = {
  body: {
    data: [
      {
        id: "00000000-0000-0000-0000-000000000001",
        type: "identity_providers",
      },
    ],
  },
  userId: "00000000-0000-9999-0000-000000000000",
};

apiInstance
  .updateUserIdentityProviders(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
