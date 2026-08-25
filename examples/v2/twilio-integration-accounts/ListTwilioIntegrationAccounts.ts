/**
 * List Twilio integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listTwilioIntegrationAccounts"] = true;
const apiInstance = new v2.TwilioIntegrationAccountsApi(configuration);

apiInstance
  .listTwilioIntegrationAccounts()
  .then((data: v2.TwilioIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
