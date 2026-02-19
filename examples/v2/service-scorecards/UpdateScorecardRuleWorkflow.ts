/**
 * Associate workflow with rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateScorecardRuleWorkflow"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiUpdateScorecardRuleWorkflowRequest = {
  ruleId: "rule_id",
  workflowId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .updateScorecardRuleWorkflow(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
