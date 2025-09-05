/**
 * Delete incident notification template returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentNotificationTemplate"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "notification_template" in the system
const NOTIFICATION_TEMPLATE_DATA_ID = process.env
  .NOTIFICATION_TEMPLATE_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentNotificationTemplateRequest = {
  id: NOTIFICATION_TEMPLATE_DATA_ID,
};

apiInstance
  .deleteIncidentNotificationTemplate(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
