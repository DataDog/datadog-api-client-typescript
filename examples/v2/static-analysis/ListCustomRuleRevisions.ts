/**
 * List Custom Rule Revisions returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCustomRuleRevisions"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiListCustomRuleRevisionsRequest = {
  rulesetName: "ruleset_name",
  ruleName: "rule_name",
};

apiInstance
  .listCustomRuleRevisions(params)
  .then((data: v2.CustomRuleRevisionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
