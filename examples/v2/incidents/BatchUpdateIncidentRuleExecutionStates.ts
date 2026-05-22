/**
 * Batch update incident rule execution states returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.batchUpdateIncidentRuleExecutionStates"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiBatchUpdateIncidentRuleExecutionStatesRequest = {
  body: {
    data: {
      attributes: {
        rules: [
          {
            lastExecutedAt: new Date(2024, 1, 1, 0, 0, 0, 0),
            ruleUuid: "00000000-0000-0000-0000-000000000000",
          },
        ],
      },
      type: "incident_rule_execution_states",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .batchUpdateIncidentRuleExecutionStates(params)
  .then((data: v2.IncidentRuleExecutionStatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
