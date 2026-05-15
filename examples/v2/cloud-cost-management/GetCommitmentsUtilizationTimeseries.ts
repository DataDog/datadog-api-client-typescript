/**
 * Get commitments utilization (timeseries) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCommitmentsUtilizationTimeseries"] =
  true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCommitmentsUtilizationTimeseriesRequest =
  {
    provider: "aws",
    product: "product",
    start: 9223372036854775807,
    end: 9223372036854775807,
  };

apiInstance
  .getCommitmentsUtilizationTimeseries(params)
  .then((data: v2.CommitmentsUtilizationTimeseriesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
