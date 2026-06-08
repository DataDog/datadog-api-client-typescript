/**
 * Get a tag indexing rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

// there is a valid "tag_indexing_rule" in the system
const TAG_INDEXING_RULE_DATA_ID = process.env
  .TAG_INDEXING_RULE_DATA_ID as string;

const params: v2.MetricsApiGetTagIndexingRuleRequest = {
  id: TAG_INDEXING_RULE_DATA_ID,
};

apiInstance
  .getTagIndexingRule(params)
  .then((data: v2.TagIndexingRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
