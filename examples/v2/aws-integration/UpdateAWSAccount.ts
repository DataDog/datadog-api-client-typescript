/**
 * AWS Integration - Patch account config returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateAWSAccount"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

// there is a valid "aws_account_v2" in the system
const AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID = process.env
  .AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID as string;

const params: v2.AWSIntegrationApiUpdateAWSAccountRequest = {
  body: {
    data: {
      attributes: {
        accountTags: [],
        authConfig: {
          roleName: "test",
        },
        awsAccountId: AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID,
        awsPartition: "aws",
        awsRegions: {
          includeOnly: ["us-east-1"],
        },
        logsConfig: {
          lambdaForwarder: {
            lambdas: [],
            sources: ["s3"],
          },
        },
        metricsConfig: {
          namespaceFilters: {
            includeOnly: ["AWS/EC2"],
          },
          tagFilters: [
            {
              namespace: "AWS/EC2",
              tags: [],
            },
          ],
        },
        resourcesConfig: {},
        tracesConfig: {
          xrayServices: {
            includeOnly: ["AWS/AppSync"],
          },
        },
      },
      id: AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID,
      type: "account",
    },
  },
  awsAccountId: AWS_ACCOUNT_V2_DATA_ATTRIBUTES_AWS_ACCOUNT_ID,
};

apiInstance
  .updateAWSAccount(params)
  .then((data: v2.AWSAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
