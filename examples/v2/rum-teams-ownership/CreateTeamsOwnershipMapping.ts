/**
 * Create a teams ownership mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTeamsOwnershipMapping"] = true;
const apiInstance = new v2.RumTeamsOwnershipApi(configuration);

const params: v2.RumTeamsOwnershipApiCreateTeamsOwnershipMappingRequest = {
  body: {
    data: {
      attributes: {
        applicationId: "11111111-2222-3333-4444-555555555555",
        matchType: "exact",
        service: "web-checkout",
        teamHandle: "team-rum",
        viewName: "/checkout",
      },
      type: "teams_ownership_mappings",
    },
  },
};

apiInstance
  .createTeamsOwnershipMapping(params)
  .then((data: v2.TeamsOwnershipMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
