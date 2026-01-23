/**
 * Revert Custom Rule Revision returns "Successfully reverted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.revertCustomRuleRevision"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiRevertCustomRuleRevisionRequest = {
  body: {
    data: {
      attributes: {},
      type: "revert_custom_rule_revision_request",
    },
  },
  rulesetName: "ruleset_name",
  ruleName: "rule_name",
};

apiInstance
  .revertCustomRuleRevision(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
