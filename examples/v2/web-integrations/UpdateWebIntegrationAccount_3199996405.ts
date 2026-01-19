/**
 * Update integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

// there is a valid "web_integration_account" in the system
const WEB_INTEGRATION_ACCOUNT_DATA_ID = process.env
  .WEB_INTEGRATION_ACCOUNT_DATA_ID as string;

const params: v2.WebIntegrationsApiUpdateWebIntegrationAccountRequest = {
  body: {
    data: {
      type: "Account",
      attributes: {
        name: "Example-Web-Integration-updated",
        settings: {
          events: "False",
          messages: "False",
          ccm_enabled: "False",
        },
      },
    },
  },
  integrationName: "twilio",
  accountId: WEB_INTEGRATION_ACCOUNT_DATA_ID,
};

apiInstance
  .updateWebIntegrationAccount(params)
  .then((data: v2.WebIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
