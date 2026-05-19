/**
 * Update case due date returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCaseDueDate"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateCaseDueDateRequest = {
  body: {
    data: {
      attributes: {
        dueDate: "2026-12-31",
      },
      type: "case",
    },
  },
  caseId: "case_id",
};

apiInstance
  .updateCaseDueDate(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
