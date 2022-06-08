/**
 * Enable an AWS Logs integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

const params: v1.AWSLogsIntegrationApiEnableAWSLogServicesRequest = {
  body: {
    accountId: "1234567",
    services: ["s3", "elb", "elbv2", "cloudfront", "redshift", "lambda"],
  },
};

apiInstance
  .enableAWSLogServices(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
