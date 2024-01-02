/**
 * Create Cloud Cost Management AWS CUR config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateCostAWSCURConfigRequest = {
  body: {
    data: {
      attributes: {
        accountId: "123456789123",
        bucketName: "dd-cost-bucket",
        bucketRegion: "us-east-1",
        reportName: "dd-report-name",
        reportPrefix: "dd-report-prefix",
      },
      type: "aws_cur_config_post_request",
    },
  },
};

apiInstance
  .createCostAWSCURConfig(params)
  .then((data: v2.AwsCURConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
