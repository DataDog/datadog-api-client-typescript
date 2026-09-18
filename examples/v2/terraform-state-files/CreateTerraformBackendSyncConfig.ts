/**
 * Create a Terraform backend sync configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TerraformStateFilesApi(configuration);

const params: v2.TerraformStateFilesApiCreateTerraformBackendSyncConfigRequest =
  {
    body: {
      data: {
        attributes: {
          accountId: "123456789012",
          backendType: "terraform",
          bucketNames: ["terraform-state-bucket"],
          region: "us-east-1",
        },
        type: "terraform-backends",
      },
    },
  };

apiInstance
  .createTerraformBackendSyncConfig(params)
  .then((data: v2.TerraformBackendResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
