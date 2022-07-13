/**
 * Update an AWS integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiUpdateAWSAccountRequest = {
  body: {
    accountId: "123456789012",
    accountSpecificNamespaceRules: {
      auto_scaling: false,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1", "us-west-2"],
    filterTags: ["$KEY:$VALUE"],
    hostTags: ["$KEY:$VALUE"],
    metricsCollectionEnabled: false,
    resourceCollectionEnabled: true,
    roleName: "datadog-role",
  },
  accountId: "123456789012",
  roleName: "datadog-role",
};

apiInstance
  .updateAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
