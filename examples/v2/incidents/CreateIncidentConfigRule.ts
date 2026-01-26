/**
 * Create incident rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentConfigRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentConfigRuleRequest = {
  body: {
    data: {
      attributes: {
        name: "High Severity Rule",
      },
      type: "incident_rule",
    },
  },
};

apiInstance
  .createIncidentConfigRule(params)
  .then((data: v2.IncidentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
