/**
 * Bulk subscribe to sample log generation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.bulkCreateSampleLogGenerationSubscriptions"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBulkCreateSampleLogGenerationSubscriptionsRequest =
  {
    body: {
      data: {
        attributes: {
          contentPackIds: ["aws-cloudtrail"],
          duration: "3d",
        },
        type: "bulk_subscription_requests",
      },
    },
  };

apiInstance
  .bulkCreateSampleLogGenerationSubscriptions(params)
  .then((data: v2.SampleLogGenerationBulkSubscriptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
