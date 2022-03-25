/**
 * Get the list of available monthly custom reports returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["getMonthlyCustomReports"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

apiInstance
  .getMonthlyCustomReports()
  .then((data: v1.UsageCustomReportsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
