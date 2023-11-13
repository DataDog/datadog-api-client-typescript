/**
 * Okta Public - Update account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OktaIntegrationApi(configuration);

const params: v2.OktaIntegrationApiUpdateOktaAccountRequest = {
  body: {
    data: {
      attributes: {
        authMethod: "oauth",
        domain: "https://example.okta.com/",
        name: "Okta-Prod",
        clientId: "client_id",
        clientSecret: "client_secret",
      },
      id: "f749daaf-682e-4208-a38d-c9b43162c609",
      type: "okta-accounts",
    },
  },
  accountId: "account_id",
};

apiInstance
  .updateOktaAccount(params)
  .then((data: v2.OktaAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
