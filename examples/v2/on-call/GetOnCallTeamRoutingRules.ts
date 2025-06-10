/**
 * Get On-Call team routing rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.OnCallApiGetOnCallTeamRoutingRulesRequest = {
  teamId: DD_TEAM_DATA_ID,
};

apiInstance
  .getOnCallTeamRoutingRules(params)
  .then((data: v2.TeamRoutingRules) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
