/**
 * Get hourly usage for application security returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest =
  {
    startHr: new Date(new Date().getTime() + -5 * 86400 * 1000),
    endHr: new Date(new Date().getTime() + -3 * 86400 * 1000),
  };

apiInstance
  .getUsageApplicationSecurityMonitoring(params)
  .then((data: v2.UsageApplicationSecurityMonitoringResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
