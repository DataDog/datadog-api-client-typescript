/**
 * Get hourly usage for Database Monitoring returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageDBMRequest = {
  startHr: new Date(2021, 11, 11, 11, 11, 11, 111000),
};

apiInstance
  .getUsageDBM(params)
  .then((data: v1.UsageDBMResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
