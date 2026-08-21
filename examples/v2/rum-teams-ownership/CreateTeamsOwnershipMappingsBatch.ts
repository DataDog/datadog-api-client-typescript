/**
 * Bulk create and remove teams ownership mappings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumTeamsOwnershipApi(configuration);

const params: v2.RumTeamsOwnershipApiCreateTeamsOwnershipMappingsBatchRequest =
  {
    body: {
      atomicOperations: [
        {
          op: "add",
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
      ],
    },
  };

apiInstance
  .createTeamsOwnershipMappingsBatch(params)
  .then((data: v2.TeamsOwnershipMappingBatchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
