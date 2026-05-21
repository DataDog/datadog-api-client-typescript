/**
 * Create an incident Jira issue returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentJiraIssue"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentJiraIssueRequest = {
  body: {
    data: {
      attributes: {
        accountId: "123456",
        issueTypeId: "10001",
        projectId: "10000",
        templateId: "00000000-0000-0000-0000-000000000000",
      },
      type: "incident_jira_issues",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentJiraIssue(params)
  .then((data: v2.IncidentJiraIssueIntegrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
