/**
 * Scalar cross product query with apm_resource_stats data source returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiQueryScalarDataRequest = {
  body: {
    data: {
      attributes: {
        formulas: [
          {
            formula: "a",
            limit: {
              count: 10,
              order: "desc",
            },
          },
        ],
        from: 1636625471000,
        queries: [
          {
            dataSource: "apm_resource_stats",
            name: "a",
            env: "staging",
            service: "azure-bill-import",
            stat: "hits",
            operationName: "cassandra.query",
            groupBy: ["resource_name"],
            primaryTagName: "datacenter",
            primaryTagValue: "*",
          },
        ],
        to: 1636629071000,
      },
      type: "scalar_request",
    },
  },
};

apiInstance
  .queryScalarData(params)
  .then((data: v2.ScalarFormulaQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
