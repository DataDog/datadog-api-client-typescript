/**
 * Get an incident notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentNotificationRule"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentNotificationRuleRequest = {
  id: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .getIncidentNotificationRule(params)
  .then((data: v2.IncidentNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
