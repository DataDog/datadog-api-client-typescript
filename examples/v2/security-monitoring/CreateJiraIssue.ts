/**
 * Create Jira issues for security findings returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createJiraIssue"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateJiraIssueRequest = {
  body: {
    data: {
      attributes: {
        accountId: "f7ccdf99-0e22-4378-bdf9-03fde5379fea",
        fields: {
          customfield_10000: "Custom field value",
        },
        issueType: "story",
        issuetypeId: "1235",
        mode: "single",
        projectId: "1234",
        projectKey: "SEC",
      },
      id: "ID",
      meta: {
        findings: [
          {
            description: "Description",
            ids: [
              {
                discovered: 123213123,
                id: "afa-afa-hze",
                resource: "Resource",
                tags: "akjasd:asdsad",
              },
            ],
            impacted: 1,
            references: "",
            remediation: "Remediation",
            severity: "critical",
            title: "Title",
            type: "ciem",
          },
        ],
        vulnerabilities: [
          {
            description: "Description",
            ids: [
              {
                discovered: 123213123,
                id: "afa-afa-hze",
                resource: "Resource",
                tags: "akjasd:asdsad",
              },
            ],
            impacted: 1,
            references: "",
            remediation: "Remediation",
            severity: "critical",
            title: "Title",
            type: "ciem",
          },
        ],
      },
      type: "jira_issue",
    },
  },
};

apiInstance
  .createJiraIssue(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
