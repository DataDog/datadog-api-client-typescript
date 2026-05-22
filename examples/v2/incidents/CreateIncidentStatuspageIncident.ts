/**
 * Create a Statuspage incident for an incident returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentStatuspageIncident"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentStatuspageIncidentRequest = {
  body: {
    data: {
      attributes: {
        body: "We are investigating the issue.",
        deliverNotifications: true,
        impact: "major",
        name: "Service Outage",
        pageId: "abc123",
        status: "investigating",
      },
      type: "incident_integrations",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentStatuspageIncident(params)
  .then((data: v2.IncidentStatuspageIncidentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
