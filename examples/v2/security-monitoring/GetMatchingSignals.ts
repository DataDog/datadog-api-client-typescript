/**
 * Get signals matching an event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getMatchingSignals"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetMatchingSignalsRequest = {
  eventId: "event_id",
  track: "track",
};

apiInstance
  .getMatchingSignals(params)
  .then((data: v2.MatchingSignalsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
