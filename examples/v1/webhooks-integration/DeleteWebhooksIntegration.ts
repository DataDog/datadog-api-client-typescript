/**
 * Delete a webhook returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

// there is a valid "webhook" in the system
const WEBHOOK_NAME = process.env.WEBHOOK_NAME as string;

const params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationRequest = {
  webhookName: WEBHOOK_NAME,
};

apiInstance
  .deleteWebhooksIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
