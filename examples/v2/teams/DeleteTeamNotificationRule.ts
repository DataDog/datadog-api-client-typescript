/**
 * Delete team notification rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

// there is a valid "team_notification_rule" in the system
const TEAM_NOTIFICATION_RULE_DATA_ID = process.env
  .TEAM_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.TeamsApiDeleteTeamNotificationRuleRequest = {
  teamId: DD_TEAM_DATA_ID,
  ruleId: TEAM_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .deleteTeamNotificationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
