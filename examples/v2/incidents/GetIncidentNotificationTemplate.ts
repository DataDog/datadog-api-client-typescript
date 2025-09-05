/**
 * Get incident notification template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentNotificationTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "notification_template" in the system
const NOTIFICATION_TEMPLATE_DATA_ID = process.env
  .NOTIFICATION_TEMPLATE_DATA_ID as string;

const params: v2.IncidentsApiGetIncidentNotificationTemplateRequest = {
  id: NOTIFICATION_TEMPLATE_DATA_ID,
};

apiInstance
  .getIncidentNotificationTemplate(params)
  .then((data: v2.IncidentNotificationTemplate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
