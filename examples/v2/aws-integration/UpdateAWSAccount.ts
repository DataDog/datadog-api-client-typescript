/**
 * Update an AWS integration returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

// there is a valid "aws_account_v2" in the system
const AWS_ACCOUNT_V2_DATA_ID = process.env.AWS_ACCOUNT_V2_DATA_ID as string;

const params: v2.AWSIntegrationApiUpdateAWSAccountRequest = {
  body: {
    data: {
      attributes: {
        accountTags: ["key:value"],
        authConfig: {
          roleName: "DatadogIntegrationRole",
        },
        awsAccountId: "123456789012",
        awsPartition: "aws",
        ccmConfig: {
          dataExportConfigs: [
            {
              bucketName: "updated-bucket",
              bucketRegion: "us-west-2",
              reportName: "updated-report",
              reportPrefix: "cost-reports",
              reportType: "CUR2.0",
            },
          ],
        },
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
  awsAccountConfigId: AWS_ACCOUNT_V2_DATA_ID,
};

apiInstance
  .updateAWSAccount(params)
  .then((data: v2.AWSAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
