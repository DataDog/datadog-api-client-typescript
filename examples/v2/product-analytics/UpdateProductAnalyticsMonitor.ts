/**
 * Update a Product Analytics monitor returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateProductAnalyticsMonitor"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiUpdateProductAnalyticsMonitorRequest = {
  body: {
    data: {
      attributes: {
        name: "Funnel conversion drop",
        options: {
          thresholds: {
            critical: 1,
            warning: 1.5,
          },
        },
      },
      type: "pa_monitor_request",
    },
  },
  monitorId: "12345",
};

apiInstance
  .updateProductAnalyticsMonitor(params)
  .then((data: v2.ProductAnalyticsMonitorResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
