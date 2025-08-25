/**
 * Get Monthly Cost Attribution returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetMonthlyCostAttributionRequest = {
  startMonth: new Date(new Date().getTime() + -5 * 86400 * 1000),
  endMonth: new Date(new Date().getTime() + -3 * 86400 * 1000),
  fields: "infra_host_total_cost",
};

apiInstance
  .getMonthlyCostAttribution(params)
  .then((data: v2.MonthlyCostAttributionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
