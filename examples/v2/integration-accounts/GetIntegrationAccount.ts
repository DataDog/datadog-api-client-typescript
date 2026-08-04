/**
 * Get an integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIntegrationAccount"] = true;
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiGetIntegrationAccountRequest = {
  integrationId: "twilio",
  interfaceId: "twilio",
  accountId: "account_id",
};

apiInstance
  .getIntegrationAccount(params)
  .then((data: v2.IntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
