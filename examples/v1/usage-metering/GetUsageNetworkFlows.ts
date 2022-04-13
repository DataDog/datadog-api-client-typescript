/**
 * Get hourly usage for Network Flows returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageNetworkFlowsRequest = {
  startHr: new Date(new Date().getTime() / 1000 + -5 * 86400),
  endHr: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getUsageNetworkFlows(params)
  .then((data: v1.UsageNetworkFlowsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
