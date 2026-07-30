/**
 * Delete a Twilio integration account returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTwilioIntegrationAccount"] = true;
const apiInstance = new v2.TwilioIntegrationAccountsApi(configuration);

const params: v2.TwilioIntegrationAccountsApiDeleteTwilioIntegrationAccountRequest =
  {
    interfaceId: "twilio",
    accountId: "account_id",
  };

apiInstance
  .deleteTwilioIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
