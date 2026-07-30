/**
 * Delete an Elastic Cloud integration account returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteElasticCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.ElasticCloudIntegrationAccountsApi(configuration);

const params: v2.ElasticCloudIntegrationAccountsApiDeleteElasticCloudIntegrationAccountRequest =
  {
    interfaceId: "elastic-cloud",
    accountId: "account_id",
  };

apiInstance
  .deleteElasticCloudIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
