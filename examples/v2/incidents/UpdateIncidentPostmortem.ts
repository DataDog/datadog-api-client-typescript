/**
 * Update postmortem for an incident returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentPostmortem"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "postmortem" in the system
const POSTMORTEM_DATA_ID = process.env.POSTMORTEM_DATA_ID as string;
const POSTMORTEM_DATA_RELATIONSHIPS_INCIDENT_DATA_ID = process.env
  .POSTMORTEM_DATA_RELATIONSHIPS_INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentPostmortemRequest = {
  body: {
    data: {
      attributes: {
        status: "in_review",
      },
      id: POSTMORTEM_DATA_ID,
      type: "incident_postmortems",
    },
  },
  incidentId: POSTMORTEM_DATA_RELATIONSHIPS_INCIDENT_DATA_ID,
};

apiInstance
  .updateIncidentPostmortem(params)
  .then((data: v2.IncidentPostmortemResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
