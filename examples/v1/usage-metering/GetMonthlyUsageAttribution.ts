/**
 * Get monthly usage attribution returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["getMonthlyUsageAttribution"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetMonthlyUsageAttributionRequest = {
  startMonth: new Date(new Date().getTime() / 1000 + -3 * 86400),
  fields: "infra_host_usage",
};

apiInstance
  .getMonthlyUsageAttribution(params)
  .then((data: v1.MonthlyUsageAttributionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
