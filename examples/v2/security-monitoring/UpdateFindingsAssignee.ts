/**
 * Assign or unassign security findings returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateFindingsAssignee"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateFindingsAssigneeRequest = {
  body: {
    data: {
      attributes: {
        assigneeId: "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0",
      },
      id: "00000000-0000-0000-0000-000000000001",
      relationships: {
        findings: {
          data: [
            {
              id: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
              type: "findings",
            },
          ],
        },
      },
      type: "assignee",
    },
  },
};

apiInstance
  .updateFindingsAssignee(params)
  .then((data: v2.AssigneeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
