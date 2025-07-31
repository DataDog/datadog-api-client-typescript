/**
 * Create a dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createDataset"] = true;
const apiInstance = new v2.DatasetsApi(configuration);

const params: v2.DatasetsApiCreateDatasetRequest = {
  body: {
    data: {
      attributes: {
        name: "Security Audit Dataset",
        principals: ["role:94172442-be03-11e9-a77a-3b7612558ac1"],
        productFilters: [
          {
            filters: ["@application.id:ABCD"],
            product: "metrics",
          },
        ],
      },
      type: "dataset",
    },
  },
};

apiInstance
  .createDataset(params)
  .then((data: v2.DatasetResponseSingle) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
