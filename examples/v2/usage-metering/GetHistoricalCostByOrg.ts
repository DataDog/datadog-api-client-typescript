/**
 * Get historical cost across your account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetHistoricalCostByOrgRequest = {
  startMonth: new Date(new Date().getTime() + -2 * 86400 * 30 * 1000),
  view: "sub-org",
};

apiInstance
  .getHistoricalCostByOrg(params)
  .then((data: v2.CostByOrgResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
