/**
 * Preview AWS metric name filter returns "AWS metric name filter preview result" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.previewAWSMetricNameFilter"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiPreviewAWSMetricNameFilterRequest = {
  body: {
    data: {
      attributes: {
        metricNameFilters: [
          {
            includeOnly: ["aws.ec2.network_in"],
            namespace: "AWS/EC2",
          },
        ],
      },
      type: "metric_name_filter_preview",
    },
  },
  awsAccountConfigId: "aws_account_config_id",
};

apiInstance
  .previewAWSMetricNameFilter(params)
  .then((data: v2.AWSMetricNameFilterPreviewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
