/**
 * Update an incident timeline entry returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentTimelineEntry"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentTimelineEntryRequest = {
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
  timelineEntryId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateIncidentTimelineEntry(params)
  .then((data: v2.IncidentTimelineEntryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
