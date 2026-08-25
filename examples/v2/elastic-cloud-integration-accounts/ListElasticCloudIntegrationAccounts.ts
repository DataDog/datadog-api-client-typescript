/**
 * List Elastic Cloud integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listElasticCloudIntegrationAccounts"] =
  true;
const apiInstance = new v2.ElasticCloudIntegrationAccountsApi(configuration);

apiInstance
  .listElasticCloudIntegrationAccounts()
  .then((data: v2.ElasticCloudIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
