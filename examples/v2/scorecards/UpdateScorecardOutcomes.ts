/**
 * Update Scorecard outcomes returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ScorecardsApi(configuration);

const params: v2.ScorecardsApiUpdateScorecardOutcomesRequest = {
  body: {
    data: {
      attributes: {
        results: [
          {
            entityReference: "service:my-service",
            remarks: `See: <a href="https://app.datadoghq.com/services">Services</a>`,
            ruleId: "q8MQxk8TCqrHnWkx",
            state: "pass",
          },
        ],
      },
      type: "batched-outcome",
    },
  },
};

apiInstance
  .updateScorecardOutcomes(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
