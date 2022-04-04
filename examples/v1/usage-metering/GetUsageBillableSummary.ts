/**
 * Get billable usage across your account returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageBillableSummaryRequest = {
  month: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getUsageBillableSummary(params)
  .then((data: v1.UsageBillableSummaryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
