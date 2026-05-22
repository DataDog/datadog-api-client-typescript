/**
 * List incident rule execution states returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentRuleExecutionStates"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListIncidentRuleExecutionStatesRequest = {
  incidentId: "incident_id",
};

apiInstance
  .listIncidentRuleExecutionStates(params)
  .then((data: v2.IncidentRuleExecutionStatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
