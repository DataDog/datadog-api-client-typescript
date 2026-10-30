/**
 * Get a Temporal Cloud OpenMetrics account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations[
  "v2.getTemporalCloudOpenMetricsIntegrationAccount"
] = true;
const apiInstance = new v2.TemporalCloudOpenMetricsIntegrationApi(
  configuration
);

const params: v2.TemporalCloudOpenMetricsIntegrationApiGetTemporalCloudOpenMetricsIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getTemporalCloudOpenMetricsIntegrationAccount(params)
  .then((data: v2.TemporalCloudOpenMetricsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
