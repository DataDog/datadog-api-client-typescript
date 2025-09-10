/**
 * Delete incident notification rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentNotificationRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "notification_rule" in the system
const NOTIFICATION_RULE_DATA_ID = process.env
  .NOTIFICATION_RULE_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentNotificationRuleRequest = {
  id: NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .deleteIncidentNotificationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
