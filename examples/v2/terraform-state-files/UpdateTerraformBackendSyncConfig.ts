/**
 * Update a Terraform backend sync configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TerraformStateFilesApi(configuration);

const params: v2.TerraformStateFilesApiUpdateTerraformBackendSyncConfigRequest =
  {
    body: {
      data: {
        attributes: {
          bucketNames: ["terraform-state-bucket"],
        },
        id: "9007199254740993",
        type: "terraform-backends",
      },
    },
    id: "9007199254740993",
  };

apiInstance
  .updateTerraformBackendSyncConfig(params)
  .then((data: v2.TerraformBackendResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
