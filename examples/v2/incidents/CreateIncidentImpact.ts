/**
 * Create an incident impact returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentImpact"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiCreateIncidentImpactRequest = {
  body: {
    data: {
      type: "incident_impacts",
      attributes: {
        startAt: new Date(2025, 9, 12, 13, 50, 0, 0),
        endAt: new Date(2025, 9, 12, 14, 50, 0, 0),
        description: "Outage in the us-east-1 region",
      },
    },
  },
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .createIncidentImpact(params)
  .then((data: v2.IncidentImpactResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
