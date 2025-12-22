/**
 * Create team notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiCreateTeamNotificationRuleRequest = {
  body: {
    attributes: {
      email: {},
      msTeams: {},
      pagerduty: {},
      slack: {},
    },
    id: "b8626d7e-cedd-11eb-abf5-da7ad0900001",
  },
  teamId: "team_id",
};

apiInstance
  .createTeamNotificationRule(params)
  .then((data: v2.TeamNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
