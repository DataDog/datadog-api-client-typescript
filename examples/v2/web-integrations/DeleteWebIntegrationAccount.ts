/**
 * Delete a web integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteWebIntegrationAccount"] = true;
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiDeleteWebIntegrationAccountRequest = {
  integrationName: "integration_name",
  accountId: "account_id",
};

apiInstance
  .deleteWebIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
