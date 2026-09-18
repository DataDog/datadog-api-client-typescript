/**
 * List Terraform backend sync configurations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TerraformStateFilesApi(configuration);

const params: v2.TerraformStateFilesApiListTerraformBackendSyncConfigsRequest =
  {
    accountId: "123456789012",
  };

apiInstance
  .listTerraformBackendSyncConfigs(params)
  .then((data: v2.TerraformBackendListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
