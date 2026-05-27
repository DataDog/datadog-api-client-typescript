/**
 * List Cloud Cost Management tag metadata months returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCostTagMetadataMonths"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCostTagMetadataMonthsRequest = {
  filterProvider: "filter[provider]",
};

apiInstance
  .listCostTagMetadataMonths(params)
  .then((data: v2.CostTagMetadataMonthsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
