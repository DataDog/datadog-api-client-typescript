/**
 * Update an existing rule returns "Rule updated successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateScorecardRule"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

// there is a valid "create_scorecard_rule" in the system
const CREATE_SCORECARD_RULE_DATA_ATTRIBUTES_NAME = process.env
  .CREATE_SCORECARD_RULE_DATA_ATTRIBUTES_NAME as string;
const CREATE_SCORECARD_RULE_DATA_ATTRIBUTES_SCORECARD_NAME = process.env
  .CREATE_SCORECARD_RULE_DATA_ATTRIBUTES_SCORECARD_NAME as string;
const CREATE_SCORECARD_RULE_DATA_ID = process.env
  .CREATE_SCORECARD_RULE_DATA_ID as string;

const params: v2.ServiceScorecardsApiUpdateScorecardRuleRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        name: CREATE_SCORECARD_RULE_DATA_ATTRIBUTES_NAME,
        scorecardName: CREATE_SCORECARD_RULE_DATA_ATTRIBUTES_SCORECARD_NAME,
        description: "Updated description via test",
      },
    },
  },
  ruleId: CREATE_SCORECARD_RULE_DATA_ID,
};

apiInstance
  .updateScorecardRule(params)
  .then((data: v2.UpdateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
