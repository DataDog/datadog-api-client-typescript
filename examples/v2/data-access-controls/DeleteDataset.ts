/**
 * Delete a Data Access Control dataset returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DataAccessControlsApi(configuration);

// there is a valid "dataset" in the system
const DATASET_DATA_ID = process.env.DATASET_DATA_ID as string;

const params: v2.DataAccessControlsApiDeleteDatasetRequest = {
  datasetId: DATASET_DATA_ID,
};

apiInstance
  .deleteDataset(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
