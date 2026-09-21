/**
 * Unsubscribe from sample log generation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteSampleLogGenerationSubscription"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiDeleteSampleLogGenerationSubscriptionRequest =
  {
    contentPackId: "content_pack_id",
  };

apiInstance
  .deleteSampleLogGenerationSubscription(params)
  .then((data: v2.SampleLogGenerationSubscriptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
