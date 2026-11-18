/**
 * Delete a Product Analytics monitor returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteProductAnalyticsMonitor"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiDeleteProductAnalyticsMonitorRequest = {
  monitorId: "12345",
};

apiInstance
  .deleteProductAnalyticsMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
