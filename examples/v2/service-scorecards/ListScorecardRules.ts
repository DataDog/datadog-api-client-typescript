/**
 * List all rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardRules"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

apiInstance
  .listScorecardRules()
  .then((data: v2.ListRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
