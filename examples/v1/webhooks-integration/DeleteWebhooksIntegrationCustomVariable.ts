/**
 * Delete a custom variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

// there is a valid "webhook_custom_variable" in the system
const WEBHOOK_CUSTOM_VARIABLE_NAME = process.env
  .WEBHOOK_CUSTOM_VARIABLE_NAME as string;

const params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest =
  {
    customVariableName: WEBHOOK_CUSTOM_VARIABLE_NAME,
  };

apiInstance
  .deleteWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
