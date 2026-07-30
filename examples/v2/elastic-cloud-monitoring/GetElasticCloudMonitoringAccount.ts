/**
 * Get an Elastic Cloud monitoring account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getElasticCloudMonitoringAccount"] = true;
const apiInstance = new v2.ElasticCloudMonitoringApi(configuration);

const params: v2.ElasticCloudMonitoringApiGetElasticCloudMonitoringAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getElasticCloudMonitoringAccount(params)
  .then((data: v2.ElasticCloudMonitoringAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
