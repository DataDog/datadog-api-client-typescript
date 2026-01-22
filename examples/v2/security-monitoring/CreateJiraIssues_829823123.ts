/**
 * Create Jira issue for security findings returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateJiraIssuesRequest = {
  body: {
    data: [
      {
        attributes: {
          title: "A title",
          description: "A description",
        },
        relationships: {
          findings: {
            data: [
              {
                id: "a3ZoLXNjbS14eXV-aS0wNWY5MGYwMGE4NDg2ODdlOA==",
                type: "findings",
              },
              {
                id: "eWswLWJsdC1hZm5-aS0wMjRlYTgwMzVkZTU1MGIwYQ==",
                type: "findings",
              },
            ],
          },
          project: {
            data: {
              id: "959a6f71-bac8-4027-b1d3-2264f569296f",
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
