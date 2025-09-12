/**
 * Get Google Cloud Usage Cost config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCostGCPUsageCostConfigRequest = {
  cloudAccountId: 123456,
};

apiInstance
  .getCostGCPUsageCostConfig(params)
  .then((data: v2.GcpUcConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
