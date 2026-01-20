/**
 * Delete Jira issue template returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteJiraIssueTemplate"] = true;
const apiInstance = new v2.JiraIntegrationApi(configuration);

const params: v2.JiraIntegrationApiDeleteJiraIssueTemplateRequest = {
  issueTemplateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .deleteJiraIssueTemplate(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
