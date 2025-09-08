/**
 * Create incident notification template returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentNotificationTemplate"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident_type" in the system
const INCIDENT_TYPE_DATA_ID = process.env.INCIDENT_TYPE_DATA_ID as string;

const params: v2.IncidentsApiCreateIncidentNotificationTemplateRequest = {
  body: {
    data: {
      attributes: {
        category: "alert",
        content:
          "An incident has been declared.\n\nTitle: Sample Incident Title\nSeverity: SEV-2\nAffected Services: web-service, database-service\nStatus: active\n\nPlease join the incident channel for updates.",
        name: "Example-Incident",
        subject: "SEV-2 Incident: Sample Incident Title",
      },
      relationships: {
        incidentType: {
          data: {
            id: INCIDENT_TYPE_DATA_ID,
            type: "incident_types",
          },
        },
      },
      type: "notification_templates",
    },
  },
};

apiInstance
  .createIncidentNotificationTemplate(params)
  .then((data: v2.IncidentNotificationTemplate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
