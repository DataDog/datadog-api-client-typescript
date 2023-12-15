/**
 * List all rule outcomes returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardOutcomes"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

apiInstance
  .listScorecardOutcomes()
  .then((data: v2.OutcomesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
