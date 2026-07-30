/**
 * Create an Elastic Cloud CCM account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createElasticCloudCcmAccount"] = true;
const apiInstance = new v2.ElasticCloudCloudCostManagementApi(configuration);

const params: v2.ElasticCloudCloudCostManagementApiCreateElasticCloudCcmAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            apiKey: "your-billing-api-key",
            type: "bearer_token",
          },
          dataflows: [
            {
              enabled: true,
              id: "elastic-cloud-cost-data",
            },
          ],
          name: "elastic-cloud-ccm-prod",
          settings: {
            elasticOrgId: "2079364244",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createElasticCloudCcmAccount(params)
  .then((data: v2.ElasticCloudCcmAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
