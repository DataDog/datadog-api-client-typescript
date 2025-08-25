/**
 * Get a list of all incident teams returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentTeams"] = true;
const apiInstance = new v2.IncidentTeamsApi(configuration);

// there is a valid "team" in the system
const TEAM_DATA_ATTRIBUTES_NAME = process.env
  .TEAM_DATA_ATTRIBUTES_NAME as string;

const params: v2.IncidentTeamsApiListIncidentTeamsRequest = {
  filter: TEAM_DATA_ATTRIBUTES_NAME,
};

apiInstance
  .listIncidentTeams(params)
  .then((data: v2.IncidentTeamsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
