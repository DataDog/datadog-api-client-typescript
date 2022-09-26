/**
 * Get historical cost across your account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetHistoricalCostByOrgRequest = {
  view: "sub-org",
  startMonth: new Date(new Date().getTime() + -1 * 60 * 1000),
};

apiInstance
  .getHistoricalCostByOrg(params)
  .then((data: v2.CostByOrgResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
