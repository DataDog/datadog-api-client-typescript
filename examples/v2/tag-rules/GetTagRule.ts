/**
 * Get a tag rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getTagRule"] = true;
const apiInstance = new v2.TagRulesApi(configuration);

const params: v2.TagRulesApiGetTagRuleRequest = {
  ruleId: "rule_id",
};

apiInstance
  .getTagRule(params)
  .then((data: v2.TagRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
