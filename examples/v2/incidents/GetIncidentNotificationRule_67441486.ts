/**
 * Get incident notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentNotificationRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "notification_rule" in the system
const NOTIFICATION_RULE_DATA_ID = process.env
  .NOTIFICATION_RULE_DATA_ID as string;

const params: v2.IncidentsApiGetIncidentNotificationRuleRequest = {
  id: NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .getIncidentNotificationRule(params)
  .then((data: v2.IncidentNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
