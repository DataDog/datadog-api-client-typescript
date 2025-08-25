/**
 * Search spans returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansApi(configuration);

const params: v2.SpansApiListSpansRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          from: "now-15m",
          query: "service:python*",
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
      type: "search_request",
    },
  },
};

(async () => {
  try {
    for await (const item of apiInstance.listSpansWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
