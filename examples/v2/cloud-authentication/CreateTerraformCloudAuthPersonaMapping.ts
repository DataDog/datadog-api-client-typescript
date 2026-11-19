/**
 * Create an HCP Terraform persona mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createTerraformCloudAuthPersonaMapping"] =
  true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "service_account_user_with_role" in the system
const SERVICE_ACCOUNT_USER_WITH_ROLE_DATA_ATTRIBUTES_EMAIL = process.env
  .SERVICE_ACCOUNT_USER_WITH_ROLE_DATA_ATTRIBUTES_EMAIL as string;

const params: v2.CloudAuthenticationApiCreateTerraformCloudAuthPersonaMappingRequest =
  {
    body: {
      data: {
        type: "terraform_cloud_auth_config",
        attributes: {
          issuerUrl: "https://app.terraform.io",
          subPattern:
            "organization:datadog-api-spec:project:Default Project:workspace:sdk-examplecloudauthentication:run_phase:*",
          accountIdentifier:
            SERVICE_ACCOUNT_USER_WITH_ROLE_DATA_ATTRIBUTES_EMAIL,
        },
      },
    },
  };

apiInstance
  .createTerraformCloudAuthPersonaMapping(params)
  .then((data: v2.TerraformCloudAuthPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
