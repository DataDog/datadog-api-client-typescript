/**
 * Update an existing incident returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["updateIncident"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
let INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

let params: v2.IncidentsApiUpdateIncidentRequest = {
  body: {
    data: {
      id: INCIDENT_DATA_ID,
      type: "incidents",
      attributes: {
        fields: {
          state: {
            type: "dropdown",
            value: "resolved",
          },
        },
        title: "A test incident title-updated",
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
