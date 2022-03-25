/**
 * Get a quick list of security signals returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["listSecurityMonitoringSignals"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listSecurityMonitoringSignals()
  .then((data: v2.SecurityMonitoringSignalsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
