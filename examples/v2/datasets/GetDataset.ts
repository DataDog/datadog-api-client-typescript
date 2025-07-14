/**
 * Get a single dataset by ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DatasetsApi(configuration);

const params: v2.DatasetsApiGetDatasetRequest = {
  datasetId: "dataset_id",
};

apiInstance
  .getDataset(params)
  .then((data: v2.DatasetResponseSingle) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
