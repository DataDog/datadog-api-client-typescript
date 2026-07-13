/**
 * Get AWS metric name filter preview returns "AWS metric name filter preview result" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAWSMetricNameFilterPreview"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiGetAWSMetricNameFilterPreviewRequest = {
  awsAccountConfigId: "aws_account_config_id",
};

apiInstance
  .getAWSMetricNameFilterPreview(params)
  .then((data: v2.AWSMetricNameFilterPreviewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
