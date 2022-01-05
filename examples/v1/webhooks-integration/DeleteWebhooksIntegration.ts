/**
 * Delete a webhook returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

// there is a valid "webhook" in the system
let WEBHOOK_NAME = process.env.WEBHOOK_NAME as string;



let params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationRequest = {
  webhookName: WEBHOOK_NAME,

};

apiInstance
  .deleteWebhooksIntegration(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));