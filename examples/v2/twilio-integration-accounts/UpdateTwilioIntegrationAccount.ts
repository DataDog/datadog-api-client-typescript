/**
 * Update a Twilio integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateTwilioIntegrationAccount"] = true;
const apiInstance = new v2.TwilioIntegrationAccountsApi(configuration);

const params: v2.TwilioIntegrationAccountsApiUpdateTwilioIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "basic",
            password: "your-password",
            username: "datadog",
          },
          dataflows: {
            twilioAlertsLogs: {
              enabled: true,
            },
            twilioCallSummariesLogs: {
              enabled: true,
            },
            twilioCloudCostMetrics: {
              enabled: true,
            },
            twilioEventsLogs: {
              enabled: true,
            },
            twilioMessagesLogs: {
              enabled: true,
            },
          },
          name: "twilio-prod",
          settings: {
            accountSid: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            censorLogs: true,
          },
        },
        id: "953a0060-81ec-4221-aed4-d4733b59cd96",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateTwilioIntegrationAccount(params)
  .then((data: v2.TwilioIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
