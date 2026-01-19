/**
 * Create Jira issue template returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createJiraIssueTemplate"] = true;
const apiInstance = new v2.JiraIntegrationApi(configuration);

const params: v2.JiraIntegrationApiCreateJiraIssueTemplateRequest = {
  body: {
    data: {
      attributes: {
        fields: {
          description: "{'payload': 'Test', 'type': 'json'}",
        },
        issueTypeId: "12730",
        jiraAccount: {
          id: "80f16d40-1fba-486e-b1fc-983e6ca19bec",
        },
        name: "test-template",
        projectId: "10772",
      },
      type: "jira-issue-template",
    },
  },
};

apiInstance
  .createJiraIssueTemplate(params)
  .then((data: v2.JiraIssueTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
