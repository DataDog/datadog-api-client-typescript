/**
 * Create postmortem for an incident returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentPostmortem"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiCreateIncidentPostmortemRequest = {
  body: {
    data: {
      attributes: {
        documentUrl: "https://app.datadoghq.com/notebook/123",
        title: "Postmortem for IR-123",
      },
      type: "incident_postmortems",
    },
  },
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .createIncidentPostmortem(params)
  .then((data: v2.IncidentPostmortemResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
