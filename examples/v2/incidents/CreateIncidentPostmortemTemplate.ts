/**
 * Create postmortem template returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentPostmortemTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentPostmortemTemplateRequest = {
  body: {
    data: {
      attributes: {
        confluencePostmortemSettings: {
          accountId: "123456",
          parentId: "345678",
          spaceId: "789012",
        },
        content:
          "# Overview\n\n# What Happened\n\n# Timeline\n\n# Action Items",
        googleDocsPostmortemSettings: {
          accountId: "123456",
          parentFolderId: "789012",
        },
        isDefault: new Date(2024, 1, 1, 0, 0, 0, 0),
        location: "datadog_notebooks",
        name: "Standard Postmortem Template",
      },
      id: "00000000-0000-0000-0000-000000000000",
      relationships: {
        incidentType: {
          data: {
            id: "00000000-0000-0000-0000-000000000009",
            type: "incident_types",
          },
        },
      },
      type: "postmortem_templates",
    },
  },
};

apiInstance
  .createIncidentPostmortemTemplate(params)
  .then((data: v2.PostmortemTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
