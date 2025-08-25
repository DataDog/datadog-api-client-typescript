/**
 * Update a custom variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

// there is a valid "webhook_custom_variable" in the system
const WEBHOOK_CUSTOM_VARIABLE_NAME = process.env
  .WEBHOOK_CUSTOM_VARIABLE_NAME as string;

const params: v1.WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest =
  {
    body: {
      value: "variable-updated",
    },
    customVariableName: WEBHOOK_CUSTOM_VARIABLE_NAME,
  };

apiInstance
  .updateWebhooksIntegrationCustomVariable(params)
  .then((data: v1.WebhooksIntegrationCustomVariableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
