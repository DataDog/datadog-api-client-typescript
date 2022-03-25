/**
 * Submit metrics returns "Payload accepted" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiSubmitMetricsRequest = {
  body: {
    series: [
      {
        metric: "system.load.1",
        type: "gauge",
        points: [[new Date().getTime() / 1000, 1.1]],
        tags: ["test:ExampleSubmitmetricsreturnsPayloadacceptedresponse"],
      },
    ],
  },
};

apiInstance
  .submitMetrics(params)
  .then((data: v1.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
