/**
 * Delete a Custom OIDC persona mapping returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteOIDCCloudAuthPersonaMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "oidc_cloud_auth_persona_mapping" in the system
const OIDC_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID = process.env
  .OIDC_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID as string;

const params: v2.CloudAuthenticationApiDeleteOIDCCloudAuthPersonaMappingRequest =
  {
    personaMappingId: OIDC_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID,
  };

apiInstance
  .deleteOIDCCloudAuthPersonaMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
