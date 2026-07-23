/**
 * Create Linear issues for security findings returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateLinearIssuesRequest = {
  body: {
    data: [
      {
        attributes: {
          assigneeId: "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0",
          description: "A description of the Linear issue.",
          labelIds: ["a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d"],
          linearProjectId: "d4c3b2a1-6f5e-8b7a-0d9c-2f1e4a3b6c5d",
          priority: "NOT_DEFINED",
          title: "A title for the Linear issue.",
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
    ],
  },
};

apiInstance
  .createLinearIssues(params)
  .then((data: v2.FindingCaseResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
