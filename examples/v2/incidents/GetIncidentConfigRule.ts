/**
 * Get incident rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentConfigRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentConfigRuleRequest = {
  ruleId: "612e0c88-9137-4bd2-8de4-9356867d4c6a",
};

apiInstance
  .getIncidentConfigRule(params)
  .then((data: v2.IncidentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
