import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params: v1.AWSLogsIntegrationApiEnableAWSLogServicesRequest = {
  // AWSLogsServicesRequest | Enable AWS Log Services request body.
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
