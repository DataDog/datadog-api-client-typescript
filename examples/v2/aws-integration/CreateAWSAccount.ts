/**
 * AWS Integration - Create account config returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAWSAccount"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiCreateAWSAccountRequest = {
  body: {
    data: {
      attributes: {
        accountTags: [],
        authConfig: {
          roleName: "test",
        },
        awsAccountId: "123456789012",
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
      id: "123456789012",
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
