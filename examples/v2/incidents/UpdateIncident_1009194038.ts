/**
 * Remove commander from an incident returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncident"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentRequest = {
  body: {
    data: {
      id: INCIDENT_DATA_ID,
      type: "incidents",
      relationships: {
        commanderUser: {
          data: null,
        },
      },
    },
  },
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .updateIncident(params)
  .then((data: v2.IncidentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
