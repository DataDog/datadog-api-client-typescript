/**
 * Update an SLO returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;
const SLO_DATA_0_NAME = process.env.SLO_DATA_0_NAME as string;

const params: v1.ServiceLevelObjectivesApiUpdateSLORequest = {
  body: {
    type: "metric",
    name: SLO_DATA_0_NAME,
    thresholds: [
      {
        target: 97.0,
        timeframe: "7d",
        warning: 98.0,
      },
    ],
    timeframe: "7d",
    targetThreshold: 97.0,
    warningThreshold: 98,
    query: {
      numerator: "sum:httpservice.hits{code:2xx}.as_count()",
      denominator: "sum:httpservice.hits{!code:3xx}.as_count()",
    },
  },
  sloId: SLO_DATA_0_ID,
};

apiInstance
  .updateSLO(params)
  .then((data: v1.SLOListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
