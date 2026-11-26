/**
 * List a source's external team permission defaults returns "OK" response
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

const params: v2.TeamsApiListExternalTeamPermissionSettingDefaultsBySourceRequest =
  {
    source: "scim",
  };

apiInstance
  .listExternalTeamPermissionSettingDefaultsBySource(params)
  .then((data: v2.ExternalTeamPermissionSettingDefaultsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
