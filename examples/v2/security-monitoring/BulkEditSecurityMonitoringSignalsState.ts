/**
 * Bulk update triage state of security signals returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBulkEditSecurityMonitoringSignalsStateRequest =
  {
    body: {
      data: [
        {
          attributes: {
            archiveReason: "none",
            state: "open",
          },
          id: "AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA",
          type: "signal",
        },
      ],
    },
  };

apiInstance
  .bulkEditSecurityMonitoringSignalsState(params)
  .then((data: v2.SecurityMonitoringSignalsBulkTriageUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
