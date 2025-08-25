/**
 * Update permission setting for team returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiUpdateTeamPermissionSettingRequest = {
  body: {
    data: {
      attributes: {
        value: "admins",
      },
      type: "team_permission_settings",
    },
  },
  teamId: DD_TEAM_DATA_ID,
  action: "manage_membership",
};

apiInstance
  .updateTeamPermissionSetting(params)
  .then((data: v2.TeamPermissionSettingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
