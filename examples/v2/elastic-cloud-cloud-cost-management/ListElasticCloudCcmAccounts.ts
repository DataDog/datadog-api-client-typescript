/**
 * List Elastic Cloud CCM accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listElasticCloudCcmAccounts"] = true;
const apiInstance = new v2.ElasticCloudCloudCostManagementApi(configuration);

apiInstance
  .listElasticCloudCcmAccounts()
  .then((data: v2.ElasticCloudCcmAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
