/**
 * Edit a Data Access Control dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateDataset"] = true;
const apiInstance = new v2.DataAccessControlsApi(configuration);

const params: v2.DataAccessControlsApiUpdateDatasetRequest = {
  body: {
    data: {
      attributes: {
        name: "Security Audit Dataset",
        principals: ["role:94172442-be03-11e9-a77a-3b7612558ac1"],
        productFilters: [
          {
            filters: ["@application.id:ABCD"],
            product: "logs",
          },
        ],
      },
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
