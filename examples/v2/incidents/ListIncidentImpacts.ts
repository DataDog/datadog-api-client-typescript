/**
 * List an incident's impacts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentImpacts"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiListIncidentImpactsRequest = {
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .listIncidentImpacts(params)
  .then((data: v2.IncidentImpactsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
