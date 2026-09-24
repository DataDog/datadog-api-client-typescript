/**
 * GetEstimatedCostByOrg with start_month returns "OK" response
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

const params: v2.UsageMeteringApiGetEstimatedCostByOrgRequest = {
  view: "sub-org",
  startMonth: new Date(),
};

apiInstance
  .getEstimatedCostByOrg(params)
  .then((data: v2.CostByOrgResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
