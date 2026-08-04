/**
 * Update an integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIntegrationAccount"] = true;
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiUpdateIntegrationAccountRequest = {
  body: {
    data: {
      attributes: {
        integration: {
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
          type: "twilio",
        },
        name: "twilio-prod",
      },
      type: "integration-account",
    },
  },
  integrationId: "twilio",
  interfaceId: "twilio",
  accountId: "account_id",
};

apiInstance
  .updateIntegrationAccount(params)
  .then((data: v2.IntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
