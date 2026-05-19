/**
 * List available Cloud Cost Management metrics returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCostTagMetadataMetrics"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCostTagMetadataMetricsRequest = {
  filterMonth: "filter[month]",
};

apiInstance
  .listCostTagMetadataMetrics(params)
  .then((data: v2.CostMetricsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
