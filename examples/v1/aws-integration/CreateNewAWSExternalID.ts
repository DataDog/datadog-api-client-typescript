/**
 * Generate a new external ID returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiCreateNewAWSExternalIDRequest = {
  body: {
    accountId: "123456789012",
    accountSpecificNamespaceRules: {
      auto_scaling: false,
      opswork: false,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1", "us-west-2"],
    extendedResourceCollectionEnabled: true,
    filterTags: ["$KEY:$VALUE"],
    hostTags: ["$KEY:$VALUE"],
    metricsCollectionEnabled: false,
    resourceCollectionEnabled: true,
    roleName: "DatadogAWSIntegrationRole",
  },
};

apiInstance
  .createNewAWSExternalID(params)
  .then((data: v1.AWSAccountCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
