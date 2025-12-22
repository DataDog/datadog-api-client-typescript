/**
 * Get team notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiGetTeamNotificationRuleRequest = {
  ruleId: "rule_id",
  teamId: "team_id",
};

apiInstance
  .getTeamNotificationRule(params)
  .then((data: v2.TeamNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
