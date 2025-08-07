/**
 * Create an AWS integration returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAWSAccount"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiCreateAWSAccountRequest = {
  body: {
    data: {
      attributes: {
        accountTags: ["key:value"],
        authConfig: {
          accessKeyId: "AKIAIOSFODNN7EXAMPLE",
          secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
        },
        awsAccountId: "123456789012",
        awsPartition: "aws",
        logsConfig: {
          lambdaForwarder: {
            lambdas: [
              "arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder",
            ],
            logSourceConfig: {
              tagFilters: [
                {
                  source: "s3",
                  tags: ["test:test"],
                },
              ],
            },
            sources: ["s3"],
          },
        },
        metricsConfig: {
          automuteEnabled: true,
          collectCloudwatchAlarms: true,
          collectCustomMetrics: true,
          enabled: true,
          tagFilters: [
            {
              namespace: "AWS/EC2",
              tags: ["key:value"],
            },
          ],
        },
        resourcesConfig: {
          cloudSecurityPostureManagementCollection: false,
          extendedCollection: false,
        },
        tracesConfig: {},
      },
      type: "account",
    },
  },
};

apiInstance
  .createAWSAccount(params)
  .then((data: v2.AWSAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
