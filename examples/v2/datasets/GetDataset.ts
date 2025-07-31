/**
 * Get a single dataset by ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDataset"] = true;
const apiInstance = new v2.DatasetsApi(configuration);

// there is a valid "dataset" in the system
const DATASET_DATA_ID = process.env.DATASET_DATA_ID as string;

const params: v2.DatasetsApiGetDatasetRequest = {
  datasetId: DATASET_DATA_ID,
};

apiInstance
  .getDataset(params)
  .then((data: v2.DatasetResponseSingle) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
