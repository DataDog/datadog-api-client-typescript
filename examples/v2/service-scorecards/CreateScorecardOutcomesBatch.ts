/**
 * Create outcomes batch returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createScorecardOutcomesBatch"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

// there is a valid "create_scorecard_rule" in the system
const CREATE_SCORECARD_RULE_DATA_ID = process.env
  .CREATE_SCORECARD_RULE_DATA_ID as string;

const params: v2.ServiceScorecardsApiCreateScorecardOutcomesBatchRequest = {
  body: {
    data: {
      attributes: {
        results: [
          {
            remarks: `See: <a href="https://app.datadoghq.com/services">Services</a>`,
            ruleId: CREATE_SCORECARD_RULE_DATA_ID,
            serviceName: "my-service",
            state: "pass",
          },
        ],
      },
      type: "batched-outcome",
    },
  },
};

apiInstance
  .createScorecardOutcomesBatch(params)
  .then((data: v2.OutcomesBatchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
