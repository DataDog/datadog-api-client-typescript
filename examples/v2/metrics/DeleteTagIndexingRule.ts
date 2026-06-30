/**
 * Delete a tag indexing rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTagIndexingRule"] = true;
const apiInstance = new v2.MetricsApi(configuration);

// there is a valid "tag_indexing_rule" in the system
const TAG_INDEXING_RULE_DATA_ID = process.env
  .TAG_INDEXING_RULE_DATA_ID as string;

const params: v2.MetricsApiDeleteTagIndexingRuleRequest = {
  id: TAG_INDEXING_RULE_DATA_ID,
};

apiInstance
  .deleteTagIndexingRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
