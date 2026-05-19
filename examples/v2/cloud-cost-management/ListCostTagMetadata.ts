/**
 * List Cloud Cost Management tag key metadata returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCostTagMetadata"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCostTagMetadataRequest = {
  filterMonth: "filter[month]",
};

apiInstance
  .listCostTagMetadata(params)
  .then((data: v2.CostTagKeyMetadataResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
