/**
 * Update integration account returns "OK: The account was successfully updated." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiUpdateWebIntegrationAccountRequest = {
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
  accountId: "account_id",
};

apiInstance
  .updateWebIntegrationAccount(params)
  .then((data: v2.WebIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
