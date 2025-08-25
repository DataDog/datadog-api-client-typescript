/**
 * Update Cloud Cost Management Azure config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateCostAzureUCConfigsRequest = {
  body: {
    data: {
      attributes: {
        isEnabled: true,
      },
      type: "azure_uc_config_patch_request",
    },
  },
  cloudAccountId: 100,
};

apiInstance
  .updateCostAzureUCConfigs(params)
  .then((data: v2.AzureUCConfigPairsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
