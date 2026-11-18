/**
 * Unlink a Product Analytics monitor from its chart returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.removeChartFromProductAnalyticsMonitor"] =
  true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiRemoveChartFromProductAnalyticsMonitorRequest =
  {
    body: {
      data: {
        attributes: {
          chartId: "chart-1",
          dashboardId: "dash-1",
        },
        type: "pa_monitor_unlink_request",
      },
    },
    monitorId: "12345",
  };

apiInstance
  .removeChartFromProductAnalyticsMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
