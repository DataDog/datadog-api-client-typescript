/**
 * Update a personal access token returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "personal_access_token" in the system
const PERSONAL_ACCESS_TOKEN_DATA_ID = process.env
  .PERSONAL_ACCESS_TOKEN_DATA_ID as string;

const params: v2.KeyManagementApiUpdatePersonalAccessTokenRequest = {
  body: {
    data: {
      type: "personal_access_tokens",
      id: PERSONAL_ACCESS_TOKEN_DATA_ID,
      attributes: {
        name: "Example-Key-Management-updated",
      },
    },
  },
  patUuid: PERSONAL_ACCESS_TOKEN_DATA_ID,
};

apiInstance
  .updatePersonalAccessToken(params)
  .then((data: v2.PersonalAccessTokenResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
