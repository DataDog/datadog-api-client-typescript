/**
 * Create an incident Microsoft Teams online meeting returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentMSTeamsOnlineMeeting"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentMSTeamsOnlineMeetingRequest = {
  incidentId: "incident_id",
};

apiInstance
  .createIncidentMSTeamsOnlineMeeting(params)
  .then((data: v2.IncidentMSTeamsIntegrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
