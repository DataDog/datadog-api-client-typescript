/**
 * Get hourly usage by product family returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetHourlyUsageRequest = {
  filterTimestampStart: new Date(new Date().getTime() + -3 * 86400 * 1000),
  filterProductFamilies: "infra_hosts",
};

apiInstance
  .getHourlyUsage(params)
  .then((data: v2.HourlyUsageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
