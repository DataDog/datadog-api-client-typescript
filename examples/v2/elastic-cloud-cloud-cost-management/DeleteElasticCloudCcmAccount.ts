/**
 * Delete an Elastic Cloud CCM account returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteElasticCloudCcmAccount"] = true;
const apiInstance = new v2.ElasticCloudCloudCostManagementApi(configuration);

const params: v2.ElasticCloudCloudCostManagementApiDeleteElasticCloudCcmAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteElasticCloudCcmAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
