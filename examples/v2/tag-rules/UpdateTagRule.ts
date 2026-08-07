/**
 * Update a tag rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateTagRule"] = true;
const apiInstance = new v2.TagRulesApi(configuration);

const params: v2.TagRulesApiUpdateTagRuleRequest = {
  body: {
    data: {
      attributes: {
        policyType: "surfacing",
        tagValuePatterns: [],
      },
      id: "123",
      type: "tag_policy",
    },
  },
  policyId: "policy_id",
};

apiInstance
  .updateTagRule(params)
  .then((data: v2.TagRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
