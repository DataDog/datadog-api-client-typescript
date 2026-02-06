/**
 * Get personal access token returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getPersonalAccessToken"] = true;
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiGetPersonalAccessTokenRequest = {
  patUuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getPersonalAccessToken(params)
  .then((data: v2.PersonalAccessTokenGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
