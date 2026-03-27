/**
 * Bulk update triage assignee of security signals returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBulkEditSecurityMonitoringSignalsAssigneeRequest =
  {
    body: {
      data: [
        {
          attributes: {
            assignee: "773b045d-ccf8-4808-bd3b-955ef6a8c940",
          },
          id: "AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA",
          type: "signal",
        },
      ],
    },
  };

apiInstance
  .bulkEditSecurityMonitoringSignalsAssignee(params)
  .then((data: v2.SecurityMonitoringSignalsBulkTriageUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
