/**
 * Update a tag indexing rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

// there is a valid "tag_indexing_rule" in the system
const TAG_INDEXING_RULE_DATA_ID = process.env
  .TAG_INDEXING_RULE_DATA_ID as string;

const params: v2.MetricsApiUpdateTagIndexingRuleRequest = {
  body: {
    data: {
      attributes: {
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
        ruleOrder: 2,
        tags: ["env", "service"],
      },
      type: "tag_indexing_rules",
    },
  },
  id: TAG_INDEXING_RULE_DATA_ID,
};

apiInstance
  .updateTagIndexingRule(params)
  .then((data: v2.TagIndexingRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
