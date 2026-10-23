/**
 * Get team hierarchy members returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listTeamHierarchyMembers"] = true;
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiListTeamHierarchyMembersRequest = {
  teamId: DD_TEAM_DATA_ID,
  filterKeyword: "Example-Team",
  pageSize: 1,
};

(async () => {
  try {
    for await (const item of apiInstance.listTeamHierarchyMembersWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
