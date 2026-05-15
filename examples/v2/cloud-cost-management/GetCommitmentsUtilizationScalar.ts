/**
 * Get commitments utilization (scalar) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCommitmentsUtilizationScalar"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCommitmentsUtilizationScalarRequest =
  {
    provider: "aws",
    product: "product",
    start: 9223372036854775807,
    end: 9223372036854775807,
  };

apiInstance
  .getCommitmentsUtilizationScalar(params)
  .then((data: v2.CommitmentsUtilizationScalarResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
