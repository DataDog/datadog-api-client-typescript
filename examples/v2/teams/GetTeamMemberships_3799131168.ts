/**
 * Get team memberships returns "Represents a user's association to a team" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiGetTeamMembershipsRequest = {
  teamId: "2e06bf2c-193b-41d4-b3c2-afccc080458f",
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.getTeamMembershipsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
