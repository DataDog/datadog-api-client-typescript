/**
 * Get entities related to a signal returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSignalEntities"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSignalEntitiesRequest = {
  signalId: "signal_id",
};

apiInstance
  .getSignalEntities(params)
  .then((data: v2.SignalEntitiesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
