/**
 * Create team notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiCreateTeamNotificationRuleRequest = {
  body: {
    data: {
      type: "team_notification_rules",
      attributes: {
        email: {
          enabled: true,
        },
        slack: {
          workspace: "Datadog",
          channel: "aaa-omg-ops",
        },
      },
    },
  },
  teamId: DD_TEAM_DATA_ID,
};

apiInstance
  .createTeamNotificationRule(params)
  .then((data: v2.TeamNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
