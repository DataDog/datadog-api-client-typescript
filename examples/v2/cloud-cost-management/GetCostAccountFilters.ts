/**
 * Get account filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCostAccountFiltersRequest = {
  cloudAccountId: 9223372036854775807,
};

apiInstance
  .getCostAccountFilters(params)
  .then((data: v2.AccountFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
