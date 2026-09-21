/**
 * Get cost across multi-org account returns "OK" response
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

const params: v2.UsageMeteringApiGetCostByOrgRequest = {
  startMonth: new Date(new Date().getTime() + -3 * 86400 * 1000),
};

apiInstance
  .getCostByOrg(params)
  .then((data: v2.CostByOrgResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
