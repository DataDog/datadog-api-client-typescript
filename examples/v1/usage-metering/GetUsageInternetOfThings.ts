/**
 * Get hourly usage for IoT returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageInternetOfThingsRequest = {
  startHr: new Date(new Date().getTime() / 1000 + -5 * 86400),
  endHr: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getUsageInternetOfThings(params)
  .then((data: v1.UsageIoTResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
