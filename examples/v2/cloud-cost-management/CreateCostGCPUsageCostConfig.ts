/**
 * Create Google Cloud Usage Cost config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateCostGCPUsageCostConfigRequest = {
  body: {
    data: {
      attributes: {
        billingAccountId: "123456_A123BC_12AB34",
        bucketName: "dd-cost-bucket",
        exportDatasetName: "billing",
        exportPrefix: "datadog_cloud_cost_usage_export",
        exportProjectName: "dd-cloud-cost-report",
        serviceAccount:
          "dd-ccm-gcp-integration@my-environment.iam.gserviceaccount.com",
      },
      type: "gcp_uc_config_post_request",
    },
  },
};

apiInstance
  .createCostGCPUsageCostConfig(params)
  .then((data: v2.GCPUsageCostConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
