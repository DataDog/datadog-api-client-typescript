/**
 * List Nebius Cloud integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listNebiusCloudIntegrationAccounts"] =
  true;
const apiInstance = new v2.NebiusCloudIntegrationApi(configuration);

apiInstance
  .listNebiusCloudIntegrationAccounts()
  .then((data: v2.NebiusCloudIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
