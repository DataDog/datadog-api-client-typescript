/**
 * Search logs (POST) returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiListLogsRequest = {
  body: {
    filter: {
      from: "now-15m",
      indexes: ["main", "web"],
      query: "service:web* AND @http.status_code:[200 TO 299]",
      storageTier: "indexes",
      to: "now",
    },
    options: {
      timezone: "GMT",
    },
    page: {
      cursor:
        "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
      limit: 25,
    },
    sort: "timestamp",
  },
};

(async () => {
  try {
    for await (const item of apiInstance.listLogsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
