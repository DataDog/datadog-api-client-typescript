/**
 * Create an incident communication returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentCommunication"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentCommunicationRequest = {
  body: {
    data: {
      attributes: {
        communicationType: "manual",
        content: {
          groupingKey: "update-1",
          handles: [
            {
              createdAt: "2024-01-01T00:00:00.000Z",
              displayName: "#incidents-channel",
              handle: "@slack-incidents-channel",
            },
          ],
          message: "Incident update for INC-123.",
          status: 0,
          subject: "Incident INC-123: Update",
        },
      },
      type: "communication",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentCommunication(params)
  .then((data: v2.IncidentCommunicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
