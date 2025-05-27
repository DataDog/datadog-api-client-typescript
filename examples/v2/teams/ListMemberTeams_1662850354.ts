/**
 * Get all member teams returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listMemberTeams"] = true;
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiListMemberTeamsRequest = {
  superTeamId: "super_team_id",
};

(async () => {
  try {
    for await (const item of apiInstance.listMemberTeamsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
