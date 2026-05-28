/**
 * Delete a Storage Management configuration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StorageManagementApi(configuration);

const params: v2.StorageManagementApiDeleteSyncConfigRequest = {
  id: "id",
};

apiInstance
  .deleteSyncConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
