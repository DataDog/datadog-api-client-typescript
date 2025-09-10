/**
 * List incident notification rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentNotificationRules"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentNotificationRules()
  .then((data: v2.IncidentNotificationRuleArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
