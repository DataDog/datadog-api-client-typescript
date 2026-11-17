/**
 * List Product Analytics monitors returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listProductAnalyticsMonitors"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

apiInstance
  .listProductAnalyticsMonitors()
  .then((data: v2.ProductAnalyticsMonitorListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
