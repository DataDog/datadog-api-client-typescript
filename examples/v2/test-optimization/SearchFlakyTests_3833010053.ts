/**
 * Search flaky tests returns "OK" response with cursor pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiSearchFlakyTestsRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          query: "*",
        },
        page: {
          limit: 2,
        },
        sort: "fqn",
      },
      type: "search_flaky_tests_request",
    },
  },
};

(async () => {
  try {
    for await (const item of apiInstance.searchFlakyTestsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
