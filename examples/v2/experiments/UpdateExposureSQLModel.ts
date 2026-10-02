/**
 * Update exposure SQL model returns "OK" response
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

const params: v2.ExperimentsApiUpdateExposureSQLModelRequest = {
  body: {
    data: {
      attributes: {
        datePartitionColumn: undefined,
        experimentColumn: "experiment_id",
        name: "Exposure events",
        properties: [
          {
            columnName: "country",
            columnType: "STRING",
            description: undefined,
            name: "country",
          },
        ],
        sql: "SELECT user_id, experiment_id, variant, exposed_at, country FROM analytics.exposures",
        subjectTypes: [
          {
            columnName: "user_id",
            subjectTypeId: "550e8400-e29b-41d4-a716-446655440010",
          },
        ],
        timestampColumn: "exposed_at",
        variantColumn: "variant",
      },
      type: "exposure-sql-models",
    },
  },
  exposureSqlModelId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .updateExposureSQLModel(params)
  .then((data: v2.ExperimentsUpdateExposureSQLModelV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
