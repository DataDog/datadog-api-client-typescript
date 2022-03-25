/**
 * Get hourly usage for RUM Sessions returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageRumSessionsRequest = {
  startHr: new Date(2021, 11, 11, 11, 11, 11, 111000),
};

apiInstance
  .getUsageRumSessions(params)
  .then((data: v1.UsageRumSessionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
