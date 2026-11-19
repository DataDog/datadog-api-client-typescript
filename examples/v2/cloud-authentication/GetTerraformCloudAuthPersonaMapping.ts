/**
 * Get an HCP Terraform persona mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getTerraformCloudAuthPersonaMapping"] =
  true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "terraform_cloud_auth_persona_mapping" in the system
const TERRAFORM_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID = process.env
  .TERRAFORM_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID as string;

const params: v2.CloudAuthenticationApiGetTerraformCloudAuthPersonaMappingRequest =
  {
    personaMappingId: TERRAFORM_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID,
  };

apiInstance
  .getTerraformCloudAuthPersonaMapping(params)
  .then((data: v2.TerraformCloudAuthPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
