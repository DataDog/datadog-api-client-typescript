/**
 * Create a Twilio integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTwilioAccount"] = true;
const apiInstance = new v2.TwilioIntegrationAccountsApi(configuration);

const params: v2.TwilioIntegrationAccountsApiCreateTwilioAccountRequest = {
  body: {
    data: {
      attributes: {
        authentication: {
          apiKey: "SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          apiKeyToken: "your-api-key-secret",
          type: "basic",
        },
        dataflows: [
          {
            enabled: true,
            id: "twilio-messages-logs",
          },
        ],
        name: "twilio-prod",
        settings: {
          accountSid: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          censorLogs: true,
        },
      },
      type: "integration-account",
    },
  },
};

apiInstance
  .createTwilioAccount(params)
  .then((data: v2.TwilioAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
