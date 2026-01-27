/**
 * Remove user as watcher returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.unwatchCase"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUnwatchCaseRequest = {
  caseId: "case_id",
  userId: "user_id",
};

apiInstance
  .unwatchCase(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
