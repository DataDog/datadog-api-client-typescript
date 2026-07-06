/**
 * Attach security findings to a Linear issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.attachLinearIssue"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiAttachLinearIssueRequest = {
  body: {
    data: {
      attributes: {
        linearIssueUrl: "https://linear.app/your-workspace/issue/ENG-123",
      },
      relationships: {
        findings: {
          data: [
            {
              id: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
              type: "findings",
            },
          ],
        },
        project: {
          data: {
            id: "aeadc05e-98a8-11ec-ac2c-da7ad0900001",
            type: "projects",
          },
        },
      },
      type: "linear_issues",
    },
  },
};

apiInstance
  .attachLinearIssue(params)
  .then((data: v2.FindingCaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
