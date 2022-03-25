/**
 * Get usage across your multi-org account returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageSummaryRequest = {
  startMonth: new Date(2021, 11, 11, 11, 11, 11, 111000),
};

apiInstance
  .getUsageSummary(params)
  .then((data: v1.UsageSummaryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
