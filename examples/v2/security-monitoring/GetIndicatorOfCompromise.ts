/**
 * Get an indicator of compromise returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIndicatorOfCompromise"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetIndicatorOfCompromiseRequest = {
  indicator: "192.0.2.1",
  includeTriageHistory: true,
};

apiInstance
  .getIndicatorOfCompromise(params)
  .then((data: v2.GetIoCIndicatorResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
