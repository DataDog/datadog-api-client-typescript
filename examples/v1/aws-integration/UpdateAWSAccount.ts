/**
 * Update an AWS integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiUpdateAWSAccountRequest = {
  body: {
    accountId: "163662907100",
    accountSpecificNamespaceRules: {
      auto_scaling: false,
    },
    cspmResourceCollectionEnabled: false,
    excludedRegions: ["us-east-1", "us-west-2"],
    extendedResourceCollectionEnabled: true,
    filterTags: ["$KEY:$VALUE"],
    hostTags: ["$KEY:$VALUE"],
    metricsCollectionEnabled: true,
    roleName: "DatadogAWSIntegrationRole",
  },
  accountId: "163662907100",
  roleName: "DatadogAWSIntegrationRole",
};

apiInstance
  .updateAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
