/**
 * Get usage attribution returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v1.getUsageAttribution"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageAttributionRequest = {
  startMonth: new Date(new Date().getTime() / 1000 + -3 * 86400),
  fields: "*",
  offset: 0,
  limit: 1,
};

apiInstance
  .getUsageAttribution(params)
  .then((data: v1.UsageAttributionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
