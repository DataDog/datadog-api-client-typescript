/**
 * Update personal access token returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updatePersonalAccessToken"] = true;
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiUpdatePersonalAccessTokenRequest = {
  body: {
    data: {
      attributes: {
        name: "Updated Personal Access Token Name",
        scopes: ["dashboards_read", "dashboards_write"],
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "personal_access_tokens",
    },
  },
  patUuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updatePersonalAccessToken(params)
  .then((data: v2.PersonalAccessTokenGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
