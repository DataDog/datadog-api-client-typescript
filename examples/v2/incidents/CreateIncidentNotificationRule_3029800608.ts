/**
 * Create incident notification rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentNotificationRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident_type" in the system
const INCIDENT_TYPE_DATA_ID = process.env.INCIDENT_TYPE_DATA_ID as string;

const params: v2.IncidentsApiCreateIncidentNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        conditions: [
          {
            field: "severity",
            values: ["SEV-1", "SEV-2"],
          },
        ],
        handles: ["@test-email@company.com"],
        visibility: "organization",
        trigger: "incident_created_trigger",
        enabled: true,
      },
      relationships: {
        incidentType: {
          data: {
            id: INCIDENT_TYPE_DATA_ID,
            type: "incident_types",
          },
        },
      },
      type: "incident_notification_rules",
    },
  },
};

apiInstance
  .createIncidentNotificationRule(params)
  .then((data: v2.IncidentNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
