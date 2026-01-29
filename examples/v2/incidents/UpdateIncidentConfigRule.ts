/**
 * Update incident rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentConfigRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentConfigRuleRequest = {
  body: {
    data: {
      attributes: {
        name: "High Severity Rule",
      },
      type: "incident_rule",
    },
  },
  ruleId: "612e0c88-9137-4bd2-8de4-9356867d4c6a",
};

apiInstance
  .updateIncidentConfigRule(params)
  .then((data: v2.IncidentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
