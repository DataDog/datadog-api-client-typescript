/**
 * Create a tag indexing rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTagIndexingRule"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateTagIndexingRuleRequest = {
  body: {
    data: {
      attributes: {
        excludeTagsMode: false,
        ignoredMetricNameMatches: [],
        metricNameMatches: ["dd.test.*"],
        name: "my-indexing-rule",
        options: {
          data: {
            dynamicTags: {
              queriedTagsWindowSeconds: 3600,
              relatedAssetTags: false,
            },
            managePreexistingMetrics: true,
            metricMatch: {
              queriedWindowSeconds: 3600,
            },
            overridePreviousRules: false,
          },
          version: 1,
        },
        tags: ["env", "service"],
      },
      type: "tag_indexing_rules",
    },
  },
};

apiInstance
  .createTagIndexingRule(params)
  .then((data: v2.TagIndexingRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
