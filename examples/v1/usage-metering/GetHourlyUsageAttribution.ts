/**
 * Get hourly usage attribution returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["getHourlyUsageAttribution"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetHourlyUsageAttributionRequest = {
  startHr: new Date(new Date().getTime() / 1000 + -3 * 86400),
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
