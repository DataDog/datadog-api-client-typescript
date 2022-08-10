/**
 * Search logs returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiListLogsRequest = {
  body: {
    filter: {
      from: "now-15m",
      indexes: ["main"],
      to: "now",
    },
    options: {
      timezone: "GMT",
    },
    page: {
      limit: 2,
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
