/**
 * Create teams ownership mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumTeamsOwnershipApi(configuration);

const params: v2.RumTeamsOwnershipApiCreateTeamsOwnershipMappingRequest = {
  body: {
    data: {
      type: "teams_ownership_mappings",
      attributes: {
        teamHandle: "team-rum",
        viewName: "/checkout-examplerumteamsownership",
        service: "web-checkout-examplerumteamsownership",
        matchType: "exact",
      },
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
