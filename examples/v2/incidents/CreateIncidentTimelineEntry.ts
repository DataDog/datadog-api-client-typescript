/**
 * Create an incident timeline entry returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentTimelineEntry"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentTimelineEntryRequest = {
  body: {
    data: {
      attributes: {
        cellType: "markdown",
        content: {
          message: "Investigating the issue.",
        },
        displayTime: new Date(2024, 1, 1, 0, 0, 0, 0),
        important: false,
      },
      type: "incident_timeline_cells",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentTimelineEntry(params)
  .then((data: v2.IncidentTimelineEntryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
