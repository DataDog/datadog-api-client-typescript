/**
 * List CoreWeave integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listCoreWeaveCloudIntegrationAccounts"] =
  true;
const apiInstance = new v2.CoreWeaveIntegrationApi(configuration);

apiInstance
  .listCoreWeaveCloudIntegrationAccounts()
  .then((data: v2.CoreWeaveCloudIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
