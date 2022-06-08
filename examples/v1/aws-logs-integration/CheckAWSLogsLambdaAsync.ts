/**
 * Check that an AWS Lambda Function exists returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

const params: v1.AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest = {
  body: {
    accountId: "1234567",
    lambdaArn:
      "arn:aws:lambda:us-east-1:1234567:function:LogsCollectionAPITest",
  },
};

apiInstance
  .checkAWSLogsLambdaAsync(params)
  .then((data: v1.AWSLogsAsyncResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
