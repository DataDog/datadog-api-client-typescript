/**
 * Update incident notification template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentNotificationTemplate"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "notification_template" in the system
const NOTIFICATION_TEMPLATE_DATA_ID = process.env
  .NOTIFICATION_TEMPLATE_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentNotificationTemplateRequest = {
  body: {
    data: {
      attributes: {
        category: "update",
        content:
          "Incident Status Update:\n\nTitle: Sample Incident Title\nNew Status: resolved\nSeverity: SEV-2\nServices: web-service, database-service\nCommander: John Doe\n\nFor more details, visit the incident page.",
        name: "Example-Incident",
        subject: "Incident Update: Sample Incident Title - resolved",
      },
      id: NOTIFICATION_TEMPLATE_DATA_ID,
      type: "notification_templates",
    },
  },
  id: NOTIFICATION_TEMPLATE_DATA_ID,
};

apiInstance
  .updateIncidentNotificationTemplate(params)
  .then((data: v2.IncidentNotificationTemplate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
