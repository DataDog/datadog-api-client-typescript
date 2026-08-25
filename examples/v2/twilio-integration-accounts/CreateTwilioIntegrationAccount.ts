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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createTwilioIntegrationAccount(params)
  .then((data: v2.TwilioIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
