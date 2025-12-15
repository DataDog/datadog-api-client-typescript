/**
 * Create Jira issues for security findings returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createJiraIssues"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateJiraIssuesRequest = {
  body: {
    data: [
      {
        attributes: {
          assigneeId: "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0",
          description: "A description of the Jira issue.",
          fields: {
            key1: "value",
            key2: "['value']",
            key3: "{'key4': 'value'}",
          },
          priority: "NOT_DEFINED",
          title: "A title for the Jira issue.",
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
        type: "jira_issues",
      },
    ],
  },
};

apiInstance
  .createJiraIssues(params)
  .then((data: v2.FindingCaseResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
