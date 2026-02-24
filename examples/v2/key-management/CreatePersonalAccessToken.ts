/**
 * Create personal access token returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createPersonalAccessToken"] = true;
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiCreatePersonalAccessTokenRequest = {
  body: {
    data: {
      attributes: {
        expiresAt: new Date(2025, 3, 15, 10, 30, 0, 0),
        name: "Example Personal Access Token",
        scopes: ["dashboards_read", "monitors_read"],
      },
      type: "personal_access_tokens",
    },
  },
};

apiInstance
  .createPersonalAccessToken(params)
  .then((data: v2.PersonalAccessTokenResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
