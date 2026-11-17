/**
 * Get a Product Analytics monitor returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getProductAnalyticsMonitor"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiGetProductAnalyticsMonitorRequest = {
  monitorId: "12345",
};

apiInstance
  .getProductAnalyticsMonitor(params)
  .then((data: v2.ProductAnalyticsMonitorResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
