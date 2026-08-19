/**
 * Delete a tag rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTagRule"] = true;
const apiInstance = new v2.TagRulesApi(configuration);

const params: v2.TagRulesApiDeleteTagRuleRequest = {
  ruleId: "rule_id",
};

apiInstance
  .deleteTagRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
