/**
 * List Cloud Cost Management orchestrators returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCostTagMetadataOrchestrators"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCostTagMetadataOrchestratorsRequest =
  {
    filterMonth: "filter[month]",
  };

apiInstance
  .listCostTagMetadataOrchestrators(params)
  .then((data: v2.CostOrchestratorsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
