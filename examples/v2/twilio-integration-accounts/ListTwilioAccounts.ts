/**
 * List Twilio integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listTwilioAccounts"] = true;
const apiInstance = new v2.TwilioIntegrationAccountsApi(configuration);

apiInstance
  .listTwilioAccounts()
  .then((data: v2.TwilioAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
