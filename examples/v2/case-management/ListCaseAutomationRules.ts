/**
 * List automation rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCaseAutomationRules"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiListCaseAutomationRulesRequest = {
  projectId: "project_id",
};

apiInstance
  .listCaseAutomationRules(params)
  .then((data: v2.AutomationRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
