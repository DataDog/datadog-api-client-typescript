/**
 * Create a new metric SLO object using sli_specification returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

const params: v1.ServiceLevelObjectivesApiCreateSLORequest = {
  body: {
    type: "metric",
    description: "Metric SLO using sli_specification",
    name: "Example-Service-Level-Objective",
    sliSpecification: {
      count: {
        goodEventsFormula: {
          formula: "query1",
        },
        totalEventsFormula: {
          formula: "query2",
        },
        queries: [
          {
            dataSource: "metrics",
            name: "query1",
            query: "sum:httpservice.success{*}.as_count()",
          },
          {
            dataSource: "metrics",
            name: "query2",
            query: "sum:httpservice.hits{*}.as_count()",
          },
        ],
      },
    },
    tags: ["env:prod", "type:count"],
    thresholds: [
      {
        target: 99.0,
        targetDisplay: "99.0",
        timeframe: "7d",
        warning: 98,
        warningDisplay: "98.0",
      },
    ],
    timeframe: "7d",
    targetThreshold: 99.0,
    warningThreshold: 98,
  },
};

apiInstance
  .createSLO(params)
  .then((data: v1.SLOListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
