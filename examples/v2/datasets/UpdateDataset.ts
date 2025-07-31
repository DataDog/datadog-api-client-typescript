/**
 * Edit a dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateDataset"] = true;
const apiInstance = new v2.DatasetsApi(configuration);

// there is a valid "dataset" in the system
const DATASET_DATA_ID = process.env.DATASET_DATA_ID as string;

const params: v2.DatasetsApiUpdateDatasetRequest = {
  body: {
    data: {
      attributes: {
        name: "Security Audit Dataset",
        principals: ["role:94172442-be03-11e9-a77a-3b7612558ac1"],
        productFilters: [
          {
            filters: ["@application.id:1234"],
            product: "metrics",
          },
        ],
      },
      type: "dataset",
    },
  },
  datasetId: DATASET_DATA_ID,
};

apiInstance
  .updateDataset(params)
  .then((data: v2.DatasetResponseSingle) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
