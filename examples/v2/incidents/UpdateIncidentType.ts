/**
 * Update an incident type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentType"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident_type" in the system
const INCIDENT_TYPE_DATA_ID = process.env.INCIDENT_TYPE_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentTypeRequest = {
  body: {
    data: {
      id: INCIDENT_TYPE_DATA_ID,
      attributes: {
        name: "Security Incident-updated",
      },
      type: "incident_types",
    },
  },
  incidentTypeId: INCIDENT_TYPE_DATA_ID,
};

apiInstance
  .updateIncidentType(params)
  .then((data: v2.IncidentTypeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
