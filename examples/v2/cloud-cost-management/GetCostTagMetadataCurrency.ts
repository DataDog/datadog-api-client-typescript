/**
 * Get the Cloud Cost Management billing currency returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCostTagMetadataCurrency"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCostTagMetadataCurrencyRequest = {
  filterMonth: "filter[month]",
};

apiInstance
  .getCostTagMetadataCurrency(params)
  .then((data: v2.CostCurrencyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
