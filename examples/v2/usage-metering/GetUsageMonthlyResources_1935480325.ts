/**
 * Get monthly usage by resource supports non-host resources
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetUsageMonthlyResourcesRequest = {
  filterBillingDimension: "indexed_points",
  filterMonth: "2026-04",
  filterView: "all",
  pageLimit: 1,
};

apiInstance
  .getUsageMonthlyResources(params)
  .then((data: v2.MonthlyResourcesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
