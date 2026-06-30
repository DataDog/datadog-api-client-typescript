/**
 * Delete a tag indexing rule exemption returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTagIndexingRuleExemption"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiDeleteTagIndexingRuleExemptionRequest = {
  metricName: "metric_name",
};

apiInstance
  .deleteTagIndexingRuleExemption(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
