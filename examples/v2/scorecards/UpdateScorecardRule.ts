/**
 * Update an existing scorecard rule returns "Rule updated successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ScorecardsApi(configuration);

const params: v2.ScorecardsApiUpdateScorecardRuleRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        level: 2,
        name: "Team Defined",
        scopeQuery: "kind:service",
        scorecardName: "Deployments automated via Deployment Trains",
      },
      type: "rule",
    },
  },
  ruleId: "rule_id",
};

apiInstance
  .updateScorecardRule(params)
  .then((data: v2.UpdateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
