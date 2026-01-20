/**
 * List Jira issue templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listJiraIssueTemplates"] = true;
const apiInstance = new v2.JiraIntegrationApi(configuration);

apiInstance
  .listJiraIssueTemplates()
  .then((data: v2.JiraIssueTemplatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
