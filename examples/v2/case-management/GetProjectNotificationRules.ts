/**
 * Get notification rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiGetProjectNotificationRulesRequest = {
  projectId: "project_id",
};

apiInstance
  .getProjectNotificationRules(params)
  .then((data: v2.CaseNotificationRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
