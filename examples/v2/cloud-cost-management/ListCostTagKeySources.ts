/**
 * List Cloud Cost Management tag sources returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCostTagKeySources"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCostTagKeySourcesRequest = {
  filterMonth: "filter[month]",
};

apiInstance
  .listCostTagKeySources(params)
  .then((data: v2.CostTagKeySourcesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
