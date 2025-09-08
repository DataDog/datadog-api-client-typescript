/**
 * Delete a notification template returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentNotificationTemplate"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiDeleteIncidentNotificationTemplateRequest = {
  id: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .deleteIncidentNotificationTemplate(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
