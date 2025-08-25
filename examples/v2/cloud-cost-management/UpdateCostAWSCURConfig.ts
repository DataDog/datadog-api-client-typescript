/**
 * Update Cloud Cost Management AWS CUR config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateCostAWSCURConfigRequest = {
  body: {
    data: {
      attributes: {
        isEnabled: true,
      },
      type: "aws_cur_config_patch_request",
    },
  },
  cloudAccountId: 100,
};

apiInstance
  .updateCostAWSCURConfig(params)
  .then((data: v2.AwsCURConfigsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
