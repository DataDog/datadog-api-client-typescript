/**
 * List all rule outcomes returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardOutcomes"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiListScorecardOutcomesRequest = {
  pageSize: 2,
  fieldsOutcome: "state",
  filterOutcomeServiceName: "my-service",
};

(async () => {
  try {
    for await (const item of apiInstance.listScorecardOutcomesWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
