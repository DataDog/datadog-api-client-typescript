/**
 * Delete all user authorized clients for a client returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UserAuthorizedClientsApi(configuration);

const params: v2.UserAuthorizedClientsApiDeleteUserAuthorizedClientsByClientRequest =
  {
    clientId: "00000000-0000-0000-0000-000000000010",
  };

apiInstance
  .deleteUserAuthorizedClientsByClient(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
