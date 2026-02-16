/**
 * Get Jira issue metadata returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getJiraIssueMetadata"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetJiraIssueMetadataRequest = {
  url: "url",
};

apiInstance
  .getJiraIssueMetadata(params)
  .then((data: v2.JiraIssuesMetadataResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
