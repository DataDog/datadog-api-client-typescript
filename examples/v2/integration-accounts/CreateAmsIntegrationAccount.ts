/**
 * Create integration account returns "Created: The account was successfully created." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiCreateAmsIntegrationAccountRequest = {
  body: {
    data: {
      attributes: {
        name: "My Production Account",
        secrets: {
          api_key_token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        settings: {
          account_sid: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          alerts: "True",
          api_key: "SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          call_summaries: "True",
          ccm_enabled: "True",
          censor_logs: "True",
          events: "True",
          messages: "True",
        },
      },
      type: "Account",
    },
  },
  integrationName: "integration_name",
  interfaceId: "interface_id",
};

apiInstance
  .createAmsIntegrationAccount(params)
  .then((data: v2.AmsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
