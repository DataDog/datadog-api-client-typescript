/**
 * Create a time-slice SLO object returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

const params: v1.ServiceLevelObjectivesApiCreateSLORequest = {
  body: {
    type: "time_slice",
    description: "string",
    name: "Example-Service-Level-Objective",
    sliSpecification: {
      timeSlice: {
        query: {
          formulas: [
            {
              formula: "query1",
            },
          ],
          queries: [
            {
              dataSource: "metrics",
              name: "query1",
              query: "trace.servlet.request{env:prod}",
            },
          ],
        },
        comparator: ">",
        threshold: 5,
      },
    },
    tags: ["env:prod"],
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
