/**
 * List incident timeline entries returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentTimelineEntries"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListIncidentTimelineEntriesRequest = {
  incidentId: "incident_id",
};

apiInstance
  .listIncidentTimelineEntries(params)
  .then((data: v2.IncidentTimelineEntriesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
