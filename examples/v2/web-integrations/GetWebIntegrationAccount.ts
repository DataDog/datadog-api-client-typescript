/**
 * Get a web integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getWebIntegrationAccount"] = true;
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiGetWebIntegrationAccountRequest = {
  integrationName: "integration_name",
  accountId: "account_id",
};

apiInstance
  .getWebIntegrationAccount(params)
  .then((data: v2.WebIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
