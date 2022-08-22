/**
 * Submit deflate distribution points returns "Payload accepted" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiSubmitDistributionPointsRequest = {
  body: {
    series: [
      {
        metric: "system.load.1.dist",
        points: [[Math.round(new Date().getTime() / 1000), [1.0, 2.0]]],
      },
    ],
  },
  contentEncoding: "deflate",
};

apiInstance
  .submitDistributionPoints(params)
  .then((data: v1.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
