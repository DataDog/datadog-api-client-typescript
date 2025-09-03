/**
 * Get a hist signal's details returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSecurityMonitoringHistsignal"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSecurityMonitoringHistsignalRequest = {
  histsignalId: "histsignal_id",
};

apiInstance
  .getSecurityMonitoringHistsignal(params)
  .then((data: v2.SecurityMonitoringSignalResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
