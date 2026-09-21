/**
 * Delete a Terraform backend sync configuration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TerraformStateFilesApi(configuration);

const params: v2.TerraformStateFilesApiDeleteTerraformBackendSyncConfigRequest =
  {
    id: "9007199254740993",
  };

apiInstance
  .deleteTerraformBackendSyncConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
