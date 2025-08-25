/**
 * Get hourly usage attribution returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetHourlyUsageAttributionRequest = {
  startHr: new Date(new Date().getTime() + -3 * 86400 * 1000),
  usageType: "infra_host_usage",
};

apiInstance
  .getHourlyUsageAttribution(params)
  .then((data: v1.HourlyUsageAttributionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
