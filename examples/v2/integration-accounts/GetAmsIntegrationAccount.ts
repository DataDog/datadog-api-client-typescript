/**
 * Get integration account returns "OK: The account details for the specified integration." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiGetAmsIntegrationAccountRequest = {
  integrationName: "integration_name",
  interfaceId: "interface_id",
  accountId: "account_id",
};

apiInstance
  .getAmsIntegrationAccount(params)
  .then((data: v2.AmsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
