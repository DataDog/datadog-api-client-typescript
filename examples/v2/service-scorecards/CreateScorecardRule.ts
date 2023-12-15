/**
 * Create a new rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createScorecardRule"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiCreateScorecardRuleRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        name: "Example-Service-Scorecard",
        scorecardName: "Observability Best Practices",
      },
      type: "rule",
    },
  },
};

apiInstance
  .createScorecardRule(params)
  .then((data: v2.CreateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
