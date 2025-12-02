/**
 * Attach security finding to a Jira issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiAttachJiraIssueRequest = {
  body: {
    data: {
      attributes: {
        jiraIssueUrl:
          "https://datadoghq-sandbox-538.atlassian.net/browse/CSMSEC-105476",
      },
      relationships: {
        findings: {
          data: [
            {
              id: "OTQ3NjJkMmYwMTIzMzMxNTc1Y2Q4MTA5NWU0NTBmMDl-ZjE3NjMxZWVkYzBjZGI1NDY2NWY2OGQxZDk4MDY4MmI=",
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
  },
};

apiInstance
  .attachJiraIssue(params)
  .then((data: v2.FindingCaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
