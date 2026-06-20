/**
 * Delete integration account returns "OK: The account was successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiDeleteAmsIntegrationAccountRequest = {
  integrationName: "integration_name",
  interfaceId: "interface_id",
  accountId: "account_id",
};

apiInstance
  .deleteAmsIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
