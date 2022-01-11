/**
 * Get Monthly Usage Attribution returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["getMonthlyUsageAttribution"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetMonthlyUsageAttributionRequest = {
  startMonth: new Date(new Date().getTime() / 1000 + -3 * 86400),
  fields: "infra_host_usage",
};

apiInstance
  .getMonthlyUsageAttribution(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
