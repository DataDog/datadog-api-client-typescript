/**
 * Create Cloud Cost Management Azure configs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateCostAzureUCConfigsRequest = {
  body: {
    data: {
      attributes: {
        accountId: "1234abcd-1234-abcd-1234-1234abcd1234",
        actualBillConfig: {
          exportName: "dd-actual-export",
          exportPath: "dd-export-path",
          storageAccount: "dd-storage-account",
          storageContainer: "dd-storage-container",
        },
        amortizedBillConfig: {
          exportName: "dd-actual-export",
          exportPath: "dd-export-path",
          storageAccount: "dd-storage-account",
          storageContainer: "dd-storage-container",
        },
        clientId: "1234abcd-1234-abcd-1234-1234abcd1234",
        scope: "subscriptions/1234abcd-1234-abcd-1234-1234abcd1234",
      },
      type: "azure_uc_config_post_request",
    },
  },
};

apiInstance
  .createCostAzureUCConfigs(params)
  .then((data: v2.AzureUCConfigPairsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
