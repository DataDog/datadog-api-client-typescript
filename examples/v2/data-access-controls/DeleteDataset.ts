/**
 * Delete a Data Access Control dataset returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteDataset"] = true;
const apiInstance = new v2.DataAccessControlsApi(configuration);

const params: v2.DataAccessControlsApiDeleteDatasetRequest = {
  datasetId: "dataset_id",
};

apiInstance
  .deleteDataset(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
