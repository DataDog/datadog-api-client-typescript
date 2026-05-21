/**
 * Create an incident Zoom meeting returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentZoomMeeting"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentZoomMeetingRequest = {
  body: {
    data: {
      attributes: {
        topic: "Incident INC-123 War Room",
      },
      type: "incident_integrations",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentZoomMeeting(params)
  .then((data: v2.IncidentZoomIntegrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
