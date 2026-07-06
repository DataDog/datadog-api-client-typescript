/**
 * Update an identity provider returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IdentityProvidersApi(configuration);

const params: v2.IdentityProvidersApiUpdateIdentityProviderRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
      },
      id: "00000000-0000-0000-0000-000000000001",
      type: "identity_providers",
    },
  },
  idpId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .updateIdentityProvider(params)
  .then((data: v2.IdentityProviderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
