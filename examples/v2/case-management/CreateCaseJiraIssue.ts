/**
 * Create Jira issue for case returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCaseJiraIssue"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateCaseJiraIssueRequest = {
  body: {
    data: {
      attributes: {
        fields: {},
        issueTypeId: "10001",
        jiraAccountId: "1234",
        projectId: "5678",
      },
      type: "issues",
    },
  },
  caseId: "case_id",
};

apiInstance
  .createCaseJiraIssue(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
