/**
 * Get all aggregated DNS traffic returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAggregatedDns"] = true;
const apiInstance = new v2.CloudNetworkMonitoringApi(configuration);

apiInstance
  .getAggregatedDns()
  .then((data: v2.SingleAggregatedDnsResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
