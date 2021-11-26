/**
 * Get the details of an incident returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
let INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

let params: v2.IncidentsApiGetIncidentRequest = {
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .getIncident(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
