/**
 * Update an external team permission default returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiUpdateExternalTeamPermissionSettingDefaultRequest = {
  body: {
    data: {
      attributes: {
        value: "user_access_manage",
      },
      id: "scim:add_and_remove_subteam",
      type: "external_team_permission_setting_defaults",
    },
  },
  source: "scim",
  action: "add_and_remove_subteam",
};

apiInstance
  .updateExternalTeamPermissionSettingDefault(params)
  .then((data: v2.ExternalTeamPermissionSettingDefaultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
