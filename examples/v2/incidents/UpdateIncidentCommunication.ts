/**
 * Update an incident communication returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentCommunication"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentCommunicationRequest = {
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
  communicationId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateIncidentCommunication(params)
  .then((data: v2.IncidentCommunicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
