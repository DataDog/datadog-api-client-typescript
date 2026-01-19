/**
 * Update Jira issue template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateJiraIssueTemplate"] = true;
const apiInstance = new v2.JiraIntegrationApi(configuration);

const params: v2.JiraIntegrationApiUpdateJiraIssueTemplateRequest = {
  body: {
    data: {
      attributes: {
        fields: {
          description: "{'payload': 'Updated Description', 'type': 'json'}",
        },
        name: "test_template_updated",
      },
      type: "jira-issue-template",
    },
  },
  issueTemplateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateJiraIssueTemplate(params)
  .then((data: v2.JiraIssueTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
