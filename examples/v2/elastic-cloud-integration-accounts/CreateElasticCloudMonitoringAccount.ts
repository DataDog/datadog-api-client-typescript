/**
 * Create an Elastic Cloud monitoring account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createElasticCloudMonitoringAccount"] =
  true;
const apiInstance = new v2.ElasticCloudIntegrationAccountsApi(configuration);

const params: v2.ElasticCloudIntegrationAccountsApiCreateElasticCloudMonitoringAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            password: "your-password",
            type: "basic",
            username: "datadog",
          },
          dataflows: [
            {
              enabled: true,
              id: "elastic-cloud-metrics",
            },
          ],
          name: "elastic-cloud-prod",
          settings: {
            catAllocationStatsEnabled: false,
            detailedIndexStatsEnabled: false,
            indexStatsEnabled: false,
            pendingTaskStatsEnabled: false,
            pshardGracefulToEnabled: false,
            pshardStatsEnabled: false,
            slmStatsEnabled: false,
            tags: ["env:prod"],
            url: "https://example.es.us-central1.gcp.cloud.es.io:9243",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createElasticCloudMonitoringAccount(params)
  .then((data: v2.ElasticCloudMonitoringAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
