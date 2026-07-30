/**
 * List Elastic Cloud monitoring accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listElasticCloudMonitoringAccounts"] =
  true;
const apiInstance = new v2.ElasticCloudMonitoringApi(configuration);

apiInstance
  .listElasticCloudMonitoringAccounts()
  .then((data: v2.ElasticCloudMonitoringAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
