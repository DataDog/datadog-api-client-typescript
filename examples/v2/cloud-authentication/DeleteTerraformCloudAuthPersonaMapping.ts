/**
 * Delete an HCP Terraform persona mapping returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteTerraformCloudAuthPersonaMapping"] =
  true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "terraform_cloud_auth_persona_mapping" in the system
const TERRAFORM_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID = process.env
  .TERRAFORM_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID as string;

const params: v2.CloudAuthenticationApiDeleteTerraformCloudAuthPersonaMappingRequest =
  {
    personaMappingId: TERRAFORM_CLOUD_AUTH_PERSONA_MAPPING_DATA_ID,
  };

apiInstance
  .deleteTerraformCloudAuthPersonaMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
