/**
 * Delete a custom variable returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

// there is a valid "webhook_custom_variable" in the system
let WEBHOOK_CUSTOM_VARIABLE_NAME = process.env
  .WEBHOOK_CUSTOM_VARIABLE_NAME as string;

let params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest =
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
