/**
 * Update integration account returns "OK: The account was successfully updated." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiUpdateAmsIntegrationAccountRequest = {
  body: {
    data: {
      attributes: {
        name: "My Production Account (Updated)",
        secrets: {
          api_key_token: "new_secret_token_value",
        },
        settings: {
          ccm_enabled: "True",
          events: "True",
          messages: "False",
        },
      },
      type: "Account",
    },
  },
  integrationName: "integration_name",
  interfaceId: "interface_id",
  accountId: "account_id",
};

apiInstance
  .updateAmsIntegrationAccount(params)
  .then((data: v2.AmsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
