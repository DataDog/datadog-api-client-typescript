/**
 * Create an SLO object returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

const params: v1.ServiceLevelObjectivesApiCreateSLORequest = {
  body: {
    type: "metric",
    description: "string",
    groups: ["env:test", "role:mysql"],
    monitorIds: [],
    name: "Example-Service-Level-Objective",
    query: {
      denominator: "sum:httpservice.hits{!code:3xx}.as_count()",
      numerator: "sum:httpservice.hits{code:2xx}.as_count()",
    },
    tags: ["env:prod", "app:core"],
    thresholds: [
      {
        target: 97.0,
        targetDisplay: "97.0",
        timeframe: "7d",
        warning: 98,
        warningDisplay: "98.0",
      },
    ],
    timeframe: "7d",
    targetThreshold: 97.0,
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
