/**
 * List timestamp overrides for an incident returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentTimestampOverrides"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListIncidentTimestampOverridesRequest = {
  incidentId: "9cecfde8-e35d-4387-8985-9b30dcb9cb1c",
};

apiInstance
  .listIncidentTimestampOverrides(params)
  .then((data: v2.IncidentTimestampOverridesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
