/**
 * Create a Custom OIDC persona mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createOIDCCloudAuthPersonaMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "oidc_cloud_auth_provider" in the system
const OIDC_CLOUD_AUTH_PROVIDER_DATA_ID = process.env
  .OIDC_CLOUD_AUTH_PROVIDER_DATA_ID as string;

// there is a valid "service_account_user_with_role" in the system
const SERVICE_ACCOUNT_USER_WITH_ROLE_DATA_ID = process.env
  .SERVICE_ACCOUNT_USER_WITH_ROLE_DATA_ID as string;

const params: v2.CloudAuthenticationApiCreateOIDCCloudAuthPersonaMappingRequest =
  {
    body: {
      data: {
        type: "custom_oidc_identity_mapping",
        attributes: {
          providerId: OIDC_CLOUD_AUTH_PROVIDER_DATA_ID,
          accountUuid: SERVICE_ACCOUNT_USER_WITH_ROLE_DATA_ID,
          claimMatchers: [
            {
              claim: "sub",
              mode: "exact",
              values: ["system:serviceaccount:controllers:example-controller"],
            },
          ],
        },
      },
    },
  };

apiInstance
  .createOIDCCloudAuthPersonaMapping(params)
  .then((data: v2.OIDCCloudAuthPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
