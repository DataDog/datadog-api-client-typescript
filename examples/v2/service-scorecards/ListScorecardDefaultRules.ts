/**
 * List default rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardDefaultRules"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

apiInstance
  .listScorecardDefaultRules()
  .then((data: v2.ListDefaultRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
