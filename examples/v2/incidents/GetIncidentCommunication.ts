/**
 * Get an incident communication returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentCommunication"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentCommunicationRequest = {
  incidentId: "incident_id",
  communicationId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getIncidentCommunication(params)
  .then((data: v2.IncidentCommunicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
