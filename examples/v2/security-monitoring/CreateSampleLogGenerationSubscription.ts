/**
 * Subscribe to sample log generation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSampleLogGenerationSubscription"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSampleLogGenerationSubscriptionRequest =
  {
    body: {
      data: {
        attributes: {
          contentPackId: "aws-cloudtrail",
          duration: "3d",
        },
        type: "subscription_requests",
      },
    },
  };

apiInstance
  .createSampleLogGenerationSubscription(params)
  .then((data: v2.SampleLogGenerationSubscriptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
