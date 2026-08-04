/**
 * Create a Twilio integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTwilioIntegrationAccount"] = true;
const apiInstance = new v2.TwilioIntegrationAccountsApi(configuration);

const params: v2.TwilioIntegrationAccountsApiCreateTwilioIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          _interface: {
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
            settings: {
              accountSid: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              censorLogs: true,
            },
            type: "twilio",
          },
          name: "twilio-prod",
        },
        type: "integration-account",
      },
    },
    interfaceId: "twilio",
  };

apiInstance
  .createTwilioIntegrationAccount(params)
  .then((data: v2.TwilioIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
