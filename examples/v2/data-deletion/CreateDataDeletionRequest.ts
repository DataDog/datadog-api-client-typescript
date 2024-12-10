/**
 * Creates a data deletion request returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DataDeletionApi(configuration);

const params: v2.DataDeletionApiCreateDataDeletionRequestRequest = {
  body: {
    data: {
      attributes: {
        from: 1672527600000,
        indexes: ["test-index", "test-index-2"],
        query: {
          host: "abc",
          service: "xyz",
        },
        to: 1704063600000,
      },
    },
  },
  product: "logs",
};

apiInstance
  .createDataDeletionRequest(params)
  .then((data: v2.CreateDataDeletionResponseBody) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
