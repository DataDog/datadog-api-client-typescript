/**
 * Delete an Amazon EventBridge source returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiDeleteAWSEventBridgeSourceRequest = {
  body: {
    accountId: "123456789012",
    eventGeneratorName: "app-alerts-zyxw3210",
    region: "us-east-1",
  },
};

apiInstance
  .deleteAWSEventBridgeSource(params)
  .then((data: v1.AWSEventBridgeDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
