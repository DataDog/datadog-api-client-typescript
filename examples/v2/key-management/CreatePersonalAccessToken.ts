/**
 * Create a personal access token returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiCreatePersonalAccessTokenRequest = {
  body: {
    data: {
      type: "personal_access_tokens",
      attributes: {
        name: "Example-Key-Management",
        scopes: ["dashboards_read"],
        expiresAt: new Date(new Date().getTime() + 365 * 86400 * 1000),
      },
    },
  },
};

apiInstance
  .createPersonalAccessToken(params)
  .then((data: v2.PersonalAccessTokenCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
