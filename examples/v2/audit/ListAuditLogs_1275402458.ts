/**
 * Get a list of Audit Logs events returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AuditApi(configuration);

const params: v2.AuditApiListAuditLogsRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listAuditLogsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
