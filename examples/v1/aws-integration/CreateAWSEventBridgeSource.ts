/**
 * Create an Amazon EventBridge source returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiCreateAWSEventBridgeSourceRequest = {
  body: {
    accountId: "123456789012",
    createEventBus: true,
    eventGeneratorName: "app-alerts",
    region: "us-east-1",
  },
};

apiInstance
  .createAWSEventBridgeSource(params)
  .then((data: v1.AWSEventBridgeCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
