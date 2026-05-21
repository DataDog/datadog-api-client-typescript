/**
 * Get incident timeline entry thread returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentTimelineEntryThread"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentTimelineEntryThreadRequest = {
  incidentId: "incident_id",
  timelineEntryId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getIncidentTimelineEntryThread(params)
  .then((data: v2.IncidentTimelineThreadResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
