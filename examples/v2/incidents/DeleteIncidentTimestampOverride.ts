/**
 * Delete a timestamp override for an incident returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentTimestampOverride"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiDeleteIncidentTimestampOverrideRequest = {
  incidentId: "9cecfde8-e35d-4387-8985-9b30dcb9cb1c",
  timestampOverrideId: "6f48a86f-9a39-4bcf-a76b-9a1b20188995",
};

apiInstance
  .deleteIncidentTimestampOverride(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
