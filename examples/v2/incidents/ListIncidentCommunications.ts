/**
 * List incident communications returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentCommunications"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListIncidentCommunicationsRequest = {
  incidentId: "incident_id",
};

apiInstance
  .listIncidentCommunications(params)
  .then((data: v2.IncidentCommunicationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
