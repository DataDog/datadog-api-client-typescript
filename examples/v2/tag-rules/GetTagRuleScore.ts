/**
 * Get a tag rule compliance score returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getTagRuleScore"] = true;
const apiInstance = new v2.TagRulesApi(configuration);

const params: v2.TagRulesApiGetTagRuleScoreRequest = {
  policyId: "policy_id",
};

apiInstance
  .getTagRuleScore(params)
  .then((data: v2.TagRuleScoreResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
