/**
 * Get a list of Audit Logs events returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuditApi(configuration);

apiInstance
  .listAuditLogs()
  .then((data: v2.AuditLogsEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
