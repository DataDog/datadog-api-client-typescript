/**
 * Update an incident Jira template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentJiraTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentJiraTemplateRequest = {
  body: {
    data: {
      attributes: {
        accountId: "123456",
        fieldConfigurations: [
          {
            incidentField: "title",
            jiraFieldKey: "summary",
            jiraFieldType: "string",
            syncDirection: "bidirectional",
          },
        ],
        isDefault: false,
        issueId: "10001",
        name: "Default Jira Template",
        projectId: "10000",
        projectKey: "INC",
        syncEnabled: true,
        type: "jira",
      },
      relationships: {
        incidentType: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_types",
          },
        },
      },
      type: "incidents_jira_templates",
    },
  },
  templateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateIncidentJiraTemplate(params)
  .then((data: v2.IncidentJiraTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
