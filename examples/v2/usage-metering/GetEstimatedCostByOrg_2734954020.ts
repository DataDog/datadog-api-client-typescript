/**
 * GetEstimatedCostByOrg with start_date returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getEstimatedCostByOrg"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetEstimatedCostByOrgRequest = {
  view: "sub-org",
  startDate: new Date(new Date().getTime() / 1000 + -5 * 86400),
};

apiInstance
  .getEstimatedCostByOrg(params)
  .then((data: v2.CostByOrgResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
