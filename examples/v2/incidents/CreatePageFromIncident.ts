/**
 * Create a page from an incident returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createPageFromIncident"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreatePageFromIncidentRequest = {
  body: {
    data: {
      attributes: {
        description: "Page created for incident response",
        services: ["web-service", "api-service"],
        tags: ["urgent", "production"],
        target: {
          identifier: "team-handle",
          type: "team_handle",
        },
        title: "Incident Response Page",
      },
      type: "page",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createPageFromIncident(params)
  .then((data: v2.IncidentCreatePageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
