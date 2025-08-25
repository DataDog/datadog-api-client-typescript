/**
 * Create an AWS integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiCreateAWSAccountRequest = {
  body: {
    accountId: "163662907100",
    accountSpecificNamespaceRules: {
      auto_scaling: false,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1", "us-west-2"],
    extendedResourceCollectionEnabled: true,
    filterTags: ["$KEY:$VALUE"],
    hostTags: ["$KEY:$VALUE"],
    metricsCollectionEnabled: false,
    roleName: "DatadogAWSIntegrationRole",
  },
};

apiInstance
  .createAWSAccount(params)
  .then((data: v1.AWSAccountCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
