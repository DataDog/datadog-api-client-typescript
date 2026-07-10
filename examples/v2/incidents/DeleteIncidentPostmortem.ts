/**
 * Delete postmortem for an incident returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentPostmortem"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "postmortem" in the system
const POSTMORTEM_DATA_RELATIONSHIPS_INCIDENT_DATA_ID = process.env
  .POSTMORTEM_DATA_RELATIONSHIPS_INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentPostmortemRequest = {
  incidentId: POSTMORTEM_DATA_RELATIONSHIPS_INCIDENT_DATA_ID,
};

apiInstance
  .deleteIncidentPostmortem(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
