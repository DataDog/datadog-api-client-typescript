/**
 * Get an Elastic Cloud CCM account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getElasticCloudCcmAccount"] = true;
const apiInstance = new v2.ElasticCloudCloudCostManagementApi(configuration);

const params: v2.ElasticCloudCloudCostManagementApiGetElasticCloudCcmAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getElasticCloudCcmAccount(params)
  .then((data: v2.ElasticCloudCcmAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
