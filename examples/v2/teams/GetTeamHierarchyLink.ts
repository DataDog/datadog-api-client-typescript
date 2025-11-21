/**
 * Get a team hierarchy link returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiGetTeamHierarchyLinkRequest = {
  linkId: "link_id",
};

apiInstance
  .getTeamHierarchyLink(params)
  .then((data: v2.TeamHierarchyLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
