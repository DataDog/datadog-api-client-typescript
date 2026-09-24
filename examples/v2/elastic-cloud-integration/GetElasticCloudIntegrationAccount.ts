/**
 * Get an Elastic Cloud integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getElasticCloudIntegrationAccount"] = true;
const apiInstance = new v2.ElasticCloudIntegrationApi(configuration);

const params: v2.ElasticCloudIntegrationApiGetElasticCloudIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getElasticCloudIntegrationAccount(params)
  .then((data: v2.ElasticCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
