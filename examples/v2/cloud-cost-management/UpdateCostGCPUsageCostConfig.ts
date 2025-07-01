/**
 * Update Cloud Cost Management GCP Usage Cost config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest = {
  body: {
    data: {
      attributes: {
        isEnabled: true,
      },
      type: "gcp_uc_config_patch_request",
    },
  },
  cloudAccountId: "100",
};

apiInstance
  .updateCostGCPUsageCostConfig(params)
  .then((data: v2.GCPUsageCostConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
