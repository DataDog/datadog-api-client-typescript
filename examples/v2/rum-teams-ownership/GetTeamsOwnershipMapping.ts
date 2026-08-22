/**
 * Get a teams ownership mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumTeamsOwnershipApi(configuration);

// there is a valid "teams_ownership_mapping" in the system
const TEAMS_OWNERSHIP_MAPPING_DATA_ID = process.env
  .TEAMS_OWNERSHIP_MAPPING_DATA_ID as string;

const params: v2.RumTeamsOwnershipApiGetTeamsOwnershipMappingRequest = {
  id: TEAMS_OWNERSHIP_MAPPING_DATA_ID,
};

apiInstance
  .getTeamsOwnershipMapping(params)
  .then((data: v2.TeamsOwnershipMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
