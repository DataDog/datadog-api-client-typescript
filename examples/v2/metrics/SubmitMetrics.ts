/**
 * Submit metrics returns "Payload accepted" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiSubmitMetricsRequest = {
  body: {
    series: [
      {
        metric: "system.load.1",
        type: 0,
        points: [
          {
            timestamp: new Date().getTime() / 1000,
            value: 0.7,
          },
        ],
      },
    ],
  },
};

apiInstance
  .submitMetrics(params)
  .then((data: v2.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
