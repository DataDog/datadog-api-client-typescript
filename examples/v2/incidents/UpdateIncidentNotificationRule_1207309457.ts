/**
 * Update incident notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentNotificationRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "notification_rule" in the system
const NOTIFICATION_RULE_DATA_ID = process.env
  .NOTIFICATION_RULE_DATA_ID as string;

// there is a valid "incident_type" in the system
const INCIDENT_TYPE_DATA_ID = process.env.INCIDENT_TYPE_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        enabled: false,
        conditions: [
          {
            field: "severity",
            values: ["SEV-1"],
          },
        ],
        handles: ["@updated-team-email@company.com"],
        visibility: "private",
        trigger: "incident_modified_trigger",
      },
      relationships: {
        incidentType: {
          data: {
            id: INCIDENT_TYPE_DATA_ID,
            type: "incident_types",
          },
        },
      },
      id: NOTIFICATION_RULE_DATA_ID,
      type: "incident_notification_rules",
    },
  },
  id: NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .updateIncidentNotificationRule(params)
  .then((data: v2.IncidentNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
