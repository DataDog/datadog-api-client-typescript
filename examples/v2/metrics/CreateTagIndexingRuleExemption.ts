/**
 * Create a tag indexing rule exemption returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateTagIndexingRuleExemptionRequest = {
  body: {
    data: {
      attributes: {
        reason: "This metric has a pre-existing tag configuration.",
      },
      type: "tag_indexing_rule_exemptions",
    },
  },
  metricName: "metric_name",
};

apiInstance
  .createTagIndexingRuleExemption(params)
  .then((data: v2.TagIndexingRuleExemptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
