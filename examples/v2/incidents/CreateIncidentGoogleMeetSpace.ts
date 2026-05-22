/**
 * Create an incident Google Meet space returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentGoogleMeetSpace"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentGoogleMeetSpaceRequest = {
  incidentId: "incident_id",
};

apiInstance
  .createIncidentGoogleMeetSpace(params)
  .then((data: v2.IncidentGoogleMeetIntegrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
