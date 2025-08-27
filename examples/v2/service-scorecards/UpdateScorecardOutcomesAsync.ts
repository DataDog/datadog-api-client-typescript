/**
 * Update Scorecard outcomes asynchronously returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateScorecardOutcomesAsync"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

// there is a valid "create_scorecard_rule" in the system
const CREATE_SCORECARD_RULE_DATA_ID = process.env
  .CREATE_SCORECARD_RULE_DATA_ID as string;

const params: v2.ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest = {
  body: {
    data: {
      attributes: {
        results: [
          {
            ruleId: CREATE_SCORECARD_RULE_DATA_ID,
            entityReference: "service:my-service",
            remarks: `See: <a href="https://app.datadoghq.com/services">Services</a>`,
            state: "pass",
          },
        ],
      },
      type: "batched-outcome",
    },
  },
};

apiInstance
  .updateScorecardOutcomesAsync(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
