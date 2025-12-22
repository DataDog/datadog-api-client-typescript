/**
 * Get team notification rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiGetTeamNotificationRulesRequest = {
  teamId: "team_id",
};

apiInstance
  .getTeamNotificationRules(params)
  .then((data: v2.TeamNotificationRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
