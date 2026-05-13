/**
 * Get cost anomaly returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCostAnomaly"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCostAnomalyRequest = {
  anomalyId: "anomaly_id",
};

apiInstance
  .getCostAnomaly(params)
  .then((data: v2.CostAnomalyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
