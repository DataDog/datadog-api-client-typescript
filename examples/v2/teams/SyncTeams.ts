/**
 * Link Teams with GitHub Teams returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.syncTeams"] = true;
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiSyncTeamsRequest = {
  body: {
    data: {
      attributes: {
        source: "github",
        type: "link",
      },
      type: "team_sync_bulk",
    },
  },
};

apiInstance
  .syncTeams(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
