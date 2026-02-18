/**
 * Create a timestamp override for an incident returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentTimestampOverride"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentTimestampOverrideRequest = {
  body: {
    data: {
      attributes: {
        timestampType: "created",
        timestampValue: new Date(2024, 12, 29, 10, 0, 0, 0),
      },
      type: "incidents_timestamp_overrides",
    },
  },
  incidentId: "9cecfde8-e35d-4387-8985-9b30dcb9cb1c",
};

apiInstance
  .createIncidentTimestampOverride(params)
  .then((data: v2.IncidentTimestampOverrideResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
