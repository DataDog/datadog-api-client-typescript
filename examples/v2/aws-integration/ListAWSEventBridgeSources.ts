/**
 * Get all Amazon EventBridge sources returns "Amazon EventBridge sources list." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .listAWSEventBridgeSources()
  .then((data: v2.AWSEventBridgeListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
