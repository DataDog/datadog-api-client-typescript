/**
 * Bulk update security signals returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBulkEditSecurityMonitoringSignalsRequest =
  {
    body: {
      data: [
        {
          attributes: {
            archiveReason: "none",
            assignee: {
              uuid: "773b045d-ccf8-4808-bd3b-955ef6a8c940",
            },
            state: "open",
          },
          id: "AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA",
          type: "signal",
        },
      ],
    },
  };

apiInstance
  .bulkEditSecurityMonitoringSignals(params)
  .then((data: v2.SecurityMonitoringSignalsBulkTriageUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
