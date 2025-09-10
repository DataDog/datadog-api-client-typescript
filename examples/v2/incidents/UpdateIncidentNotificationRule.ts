/**
 * Update an incident notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentNotificationRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        conditions: [
          {
            field: "severity",
            values: ["SEV-1", "SEV-2"],
          },
        ],
        enabled: true,
        handles: ["@team-email@company.com", "@slack-channel"],
        renotifyOn: ["status", "severity"],
        trigger: "incident_created_trigger",
        visibility: "organization",
      },
      id: "00000000-0000-0000-0000-000000000001",
      relationships: {
        incidentType: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_types",
          },
        },
        notificationTemplate: {
          data: {
            id: "00000000-0000-0000-0000-000000000001",
            type: "notification_templates",
          },
        },
      },
      type: "incident_notification_rules",
    },
  },
  id: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .updateIncidentNotificationRule(params)
  .then((data: v2.IncidentNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
