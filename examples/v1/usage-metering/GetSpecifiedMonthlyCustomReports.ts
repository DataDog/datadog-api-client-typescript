/**
 * Get specified monthly custom reports returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["getSpecifiedMonthlyCustomReports"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest = {
  reportId: "2021-05-01",
};

apiInstance
  .getSpecifiedMonthlyCustomReports(params)
  .then((data: v1.UsageSpecifiedCustomReportsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
