/**
 * Get cost Azure UC config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCostAzureUCConfigRequest = {
  cloudAccountId: 123456,
};

apiInstance
  .getCostAzureUCConfig(params)
  .then((data: v2.UCConfigPair) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
