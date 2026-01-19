/**
 * Delete integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

// there is a valid "web_integration_account" in the system
const WEB_INTEGRATION_ACCOUNT_DATA_ID = process.env
  .WEB_INTEGRATION_ACCOUNT_DATA_ID as string;

const params: v2.WebIntegrationsApiDeleteWebIntegrationAccountRequest = {
  integrationName: "twilio",
  accountId: WEB_INTEGRATION_ACCOUNT_DATA_ID,
};

apiInstance
  .deleteWebIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
