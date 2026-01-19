/**
 * Create integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiCreateWebIntegrationAccountRequest = {
  body: {
    data: {
      type: "Account",
      attributes: {
        name: "Example-Web-Integration",
        settings: {
          api_key: "SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          account_sid: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          events: "True",
          messages: "True",
          alerts: "True",
          call_summaries: "True",
          ccm_enabled: "True",
          censor_logs: "True",
        },
        secrets: {
          api_key_token: "test_secret_token",
        },
      },
    },
  },
  integrationName: "twilio",
};

apiInstance
  .createWebIntegrationAccount(params)
  .then((data: v2.WebIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
