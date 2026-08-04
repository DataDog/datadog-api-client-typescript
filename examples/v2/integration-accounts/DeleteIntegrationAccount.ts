/**
 * Delete an integration account returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIntegrationAccount"] = true;
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiDeleteIntegrationAccountRequest = {
  integrationId: "twilio",
  interfaceId: "twilio",
  accountId: "account_id",
};

apiInstance
  .deleteIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
