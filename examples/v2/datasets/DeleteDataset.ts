/**
 * Delete a dataset returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DatasetsApi(configuration);

const params: v2.DatasetsApiDeleteDatasetRequest = {
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
