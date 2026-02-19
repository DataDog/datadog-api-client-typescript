/**
 * Delete rule workflow returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteScorecardRuleWorkflow"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiDeleteScorecardRuleWorkflowRequest = {
  ruleId: "rule_id",
};

apiInstance
  .deleteScorecardRuleWorkflow(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
