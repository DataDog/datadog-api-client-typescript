/**
 * Get a user authorized client returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UserAuthorizedClientsApi(configuration);

const params: v2.UserAuthorizedClientsApiGetUserAuthorizedClientRequest = {
  userAuthorizedClientId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .getUserAuthorizedClient(params)
  .then((data: v2.UserAuthorizedClientResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
