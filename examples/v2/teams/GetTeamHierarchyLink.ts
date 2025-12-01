/**
 * Get a team hierarchy link returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "team_hierarchy_link" in the system
const TEAM_HIERARCHY_LINK_DATA_ID = process.env
  .TEAM_HIERARCHY_LINK_DATA_ID as string;

const params: v2.TeamsApiGetTeamHierarchyLinkRequest = {
  linkId: TEAM_HIERARCHY_LINK_DATA_ID,
};

apiInstance
  .getTeamHierarchyLink(params)
  .then((data: v2.TeamHierarchyLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
