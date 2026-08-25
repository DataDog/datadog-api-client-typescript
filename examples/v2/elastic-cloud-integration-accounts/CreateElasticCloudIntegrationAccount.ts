/**
 * Create an Elastic Cloud integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createElasticCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.ElasticCloudIntegrationAccountsApi(configuration);

const params: v2.ElasticCloudIntegrationAccountsApiCreateElasticCloudIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "basic",
            password: "your-password",
            username: "datadog",
          },
          dataflows: {
            elasticCloudDetailedIndexStats: {
              enabled: true,
            },
            elasticCloudIndexStats: {
              enabled: true,
            },
            elasticCloudPendingTaskStats: {
              enabled: true,
            },
            elasticCloudPrimaryShardGracefulTimeout: {
              enabled: true,
            },
            elasticCloudPrimaryShardStats: {
              enabled: true,
            },
            elasticCloudShardAllocationStats: {
              enabled: true,
            },
            elasticCloudSlmStats: {
              enabled: true,
            },
          },
          name: "elastic-cloud-prod",
          settings: {
            tags: "env:prod,team:saasint",
            url: "https://example.es.us-central1.gcp.cloud.es.io:9243",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createElasticCloudIntegrationAccount(params)
  .then((data: v2.ElasticCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
