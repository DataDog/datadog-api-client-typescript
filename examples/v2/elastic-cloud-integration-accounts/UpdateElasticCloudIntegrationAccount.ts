/**
 * Update an Elastic Cloud integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateElasticCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.ElasticCloudIntegrationAccountsApi(configuration);

const params: v2.ElasticCloudIntegrationAccountsApiUpdateElasticCloudIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          _interface: {
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
            type: "elastic-cloud",
          },
          name: "elastic-cloud-prod",
        },
        type: "integration-account",
      },
    },
    interfaceId: "elastic-cloud",
    accountId: "account_id",
  };

apiInstance
  .updateElasticCloudIntegrationAccount(params)
  .then((data: v2.ElasticCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
