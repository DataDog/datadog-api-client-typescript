/**
 * Create an Amazon EventBridge source returns "Amazon EventBridge source created." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiCreateAWSEventBridgeSourceRequest = {
  body: {
    data: {
      attributes: {
        accountId: "123456789012",
        createEventBus: true,
        eventGeneratorName: "app-alerts",
        region: "us-east-1",
      },
      type: "event_bridge",
    },
  },
};

apiInstance
  .createAWSEventBridgeSource(params)
  .then((data: v2.AWSEventBridgeCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
