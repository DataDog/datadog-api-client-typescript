/**
 * Get Cost Across Multi-Org Account returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetCostByOrgRequest = {
  startMonth: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getCostByOrg(params)
  .then((data: v2.CostByOrgResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
