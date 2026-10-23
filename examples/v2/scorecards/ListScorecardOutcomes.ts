/**
 * List all rule outcomes returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ScorecardsApi(configuration);

const params: v2.ScorecardsApiListScorecardOutcomesRequest = {
  filterRuleId: "00000000-0000-0000-0000-000000000000",
};

apiInstance
  .listScorecardOutcomes(params)
  .then((data: v2.OutcomesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
