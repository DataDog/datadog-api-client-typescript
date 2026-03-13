/**
 * Batch rows query returns "Successfully retrieved rows. Some or all requested rows were found. Response includes found
 * rows in the included section." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiBatchRowsQueryRequest = {
  body: {
    data: {
      attributes: {
        rowIds: ["row_id_1", "row_id_2"],
        tableId: "00000000-0000-0000-0000-000000000000",
      },
      type: "reference-tables-batch-rows-query",
    },
  },
};

apiInstance
  .batchRowsQuery(params)
  .then((data: v2.BatchRowsQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
