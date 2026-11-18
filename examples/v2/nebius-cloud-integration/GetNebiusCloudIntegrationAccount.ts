/**
 * Get a Nebius Cloud integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getNebiusCloudIntegrationAccount"] = true;
const apiInstance = new v2.NebiusCloudIntegrationApi(configuration);

const params: v2.NebiusCloudIntegrationApiGetNebiusCloudIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getNebiusCloudIntegrationAccount(params)
  .then((data: v2.NebiusCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
