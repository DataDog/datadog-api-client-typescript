/**
 * List scores by aggregation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardScores"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiListScorecardScoresRequest = {
  aggregation: "by-entity",
};

apiInstance
  .listScorecardScores(params)
  .then((data: v2.ListScoresResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
