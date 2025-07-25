/**
 * Edit a dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DatasetsApi(configuration);

const params: v2.DatasetsApiUpdateDatasetRequest = {
  body: {
    data: {
      attributes: {
        createdAt: undefined,
        name: "Security Audit Dataset",
        principals: ["role:86245fce-0a4e-11f0-92bd-da7ad0900002"],
        productFilters: [
          {
            filters: ["@application.id:ABCD"],
            product: "logs",
          },
        ],
      },
      id: "123e4567-e89b-12d3-a456-426614174000",
      type: "dataset",
    },
  },
  datasetId: "dataset_id",
};

apiInstance
  .updateDataset(params)
  .then((data: v2.DatasetResponseSingle) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
