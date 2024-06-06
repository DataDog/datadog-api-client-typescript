/**
 * AWS Integration - Create account returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAWSAccountv2"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiCreateAWSAccountv2Request = {
  body: {
    data: {
      attributes: {
        accountTags: [],
        authConfig: {},
        awsAccountId: "123456789012",
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
            excludeOnly: ["AWS/EC2"],
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
      type: "aws_account",
    },
  },
};

apiInstance
  .createAWSAccountv2(params)
  .then((data: v2.AWSAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
