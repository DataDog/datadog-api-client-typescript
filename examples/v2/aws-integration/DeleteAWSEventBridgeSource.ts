/**
 * Delete an Amazon EventBridge source returns "Amazon EventBridge source deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiDeleteAWSEventBridgeSourceRequest = {
  body: {
    data: {
      attributes: {
        accountId: "123456789012",
        eventGeneratorName: "app-alerts-zyxw3210",
        region: "us-east-1",
      },
      type: "event_bridge",
    },
  },
};

apiInstance
  .deleteAWSEventBridgeSource(params)
  .then((data: v2.AWSEventBridgeDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
