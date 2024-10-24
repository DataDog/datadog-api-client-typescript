/**
 * Delete an incident type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentType"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident_type" in the system
const INCIDENT_TYPE_DATA_ID = process.env.INCIDENT_TYPE_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentTypeRequest = {
  incidentTypeId: INCIDENT_TYPE_DATA_ID,
};

apiInstance
  .deleteIncidentType(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
