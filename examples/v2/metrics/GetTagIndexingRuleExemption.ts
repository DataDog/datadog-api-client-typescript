/**
 * Get a tag indexing rule exemption returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getTagIndexingRuleExemption"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiGetTagIndexingRuleExemptionRequest = {
  metricName: "metric_name",
};

apiInstance
  .getTagIndexingRuleExemption(params)
  .then((data: v2.TagIndexingRuleExemptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
