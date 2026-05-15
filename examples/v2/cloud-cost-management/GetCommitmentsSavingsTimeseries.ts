/**
 * Get commitments savings (timeseries) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCommitmentsSavingsTimeseries"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCommitmentsSavingsTimeseriesRequest =
  {
    provider: "aws",
    product: "product",
    start: 9223372036854775807,
    end: 9223372036854775807,
  };

apiInstance
  .getCommitmentsSavingsTimeseries(params)
  .then((data: v2.CommitmentsSavingsTimeseriesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
