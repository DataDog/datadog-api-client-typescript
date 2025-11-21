/**
 * Remove a team hierarchy link returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiRemoveTeamHierarchyLinkRequest = {
  linkId: "link_id",
};

apiInstance
  .removeTeamHierarchyLink(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
