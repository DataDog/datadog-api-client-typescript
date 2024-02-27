/**
 * Add Okta account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OktaIntegrationApi(configuration);

const params: v2.OktaIntegrationApiCreateOktaAccountRequest = {
  body: {
    data: {
      attributes: {
        authMethod: "oauth",
        domain: "https://example.okta.com/",
        name: "exampleoktaintegration",
        clientId: "client_id",
        clientSecret: "client_secret",
      },
      id: "f749daaf-682e-4208-a38d-c9b43162c609",
      type: "okta-accounts",
    },
  },
};

apiInstance
  .createOktaAccount(params)
  .then((data: v2.OktaAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
