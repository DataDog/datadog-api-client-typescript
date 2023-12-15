/**
 * Get projected cost across your account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetProjectedCostRequest = {
  view: "sub-org",
};

apiInstance
  .getProjectedCost(params)
  .then((data: v2.ProjectedCostResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
