/**
 * Get all aggregated connections returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudNetworkMonitoringApi(configuration);

apiInstance
  .getAggregatedConnections()
  .then((data: v2.SingleAggregatedConnectionResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
