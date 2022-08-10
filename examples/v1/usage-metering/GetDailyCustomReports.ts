/**
 * Get the list of available daily custom reports returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v1.getDailyCustomReports"] = true;
const apiInstance = new v1.UsageMeteringApi(configuration);

apiInstance
  .getDailyCustomReports()
  .then((data: v1.UsageCustomReportsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
