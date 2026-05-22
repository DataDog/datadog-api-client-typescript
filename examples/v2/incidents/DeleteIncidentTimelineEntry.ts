/**
 * Delete an incident timeline entry returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentTimelineEntry"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiDeleteIncidentTimelineEntryRequest = {
  incidentId: "incident_id",
  timelineEntryId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .deleteIncidentTimelineEntry(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
