/**
 * List teams ownership rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumTeamsOwnershipApi(configuration);

// there is a valid "teams_ownership_mapping" in the system
const TEAMS_OWNERSHIP_MAPPING_DATA_ATTRIBUTES_VIEW_NAME = process.env
  .TEAMS_OWNERSHIP_MAPPING_DATA_ATTRIBUTES_VIEW_NAME as string;

const params: v2.RumTeamsOwnershipApiListTeamsOwnershipRulesRequest = {
  filterViewName: TEAMS_OWNERSHIP_MAPPING_DATA_ATTRIBUTES_VIEW_NAME,
};

apiInstance
  .listTeamsOwnershipRules(params)
  .then((data: v2.TeamsOwnershipRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
