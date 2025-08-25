/**
 * Search tests events returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityTestsApi(configuration);

const params: v2.CIVisibilityTestsApiSearchCIAppTestEventsRequest = {
  body: {
    filter: {
      from: "now-15m",
      query: "@test.status:pass AND -@language:python",
      to: "now",
    },
    page: {
      limit: 2,
    },
    sort: "timestamp",
  },
};

(async () => {
  try {
    for await (const item of apiInstance.searchCIAppTestEventsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
