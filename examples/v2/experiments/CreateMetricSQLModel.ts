/**
 * Create metric SQL model returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiCreateMetricSQLModelRequest = {
  body: {
    data: {
      attributes: {
        datePartitionColumn: undefined,
        description: undefined,
        measures: [
          {
            columnName: "revenue",
            columnType: "FLOAT",
            description: undefined,
            name: undefined,
          },
        ],
        name: "Order facts",
        properties: [
          {
            columnName: "item_type",
            columnType: "STRING",
            description: undefined,
            name: "item_type",
          },
        ],
        sql: "SELECT user_id, order_id, item_type, revenue, created_at FROM analytics.orders",
        subjectTypes: [
          {
            columnName: "user_id",
            subjectTypeId: "550e8400-e29b-41d4-a716-446655440010",
          },
        ],
        timestampColumn: "created_at",
      },
      type: "metric-sql-models",
    },
  },
};

apiInstance
  .createMetricSQLModel(params)
  .then((data: v2.ExperimentsMetricSQLModelV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
