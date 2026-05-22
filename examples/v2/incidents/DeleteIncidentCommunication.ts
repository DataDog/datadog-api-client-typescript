/**
 * Delete an incident communication returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentCommunication"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiDeleteIncidentCommunicationRequest = {
  incidentId: "incident_id",
  communicationId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .deleteIncidentCommunication(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
