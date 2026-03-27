/**
 * Delete a rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ScorecardsApi(configuration);

// there is a valid "create_scorecard_rule" in the system
const CREATE_SCORECARD_RULE_DATA_ID = process.env
  .CREATE_SCORECARD_RULE_DATA_ID as string;

const params: v2.ScorecardsApiDeleteScorecardRuleRequest = {
  ruleId: CREATE_SCORECARD_RULE_DATA_ID,
};

apiInstance
  .deleteScorecardRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
