/**
 * Create a security signal investigation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSignalInvestigation"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSignalInvestigationRequest = {
  body: {
    data: {
      attributes: {
        deployment: "live",
        signalId: "AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA",
      },
      type: "investigation_signal",
    },
  },
};

apiInstance
  .createSignalInvestigation(params)
  .then((data: v2.SecurityMonitoringSignalInvestigationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
