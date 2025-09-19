/**
 * Search flaky tests returns "OK" response with filtered query
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchFlakyTests"] = true;
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiSearchFlakyTestsRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          query: `flaky_test_state:active @git.repository.id_v2:"github.com/datadog/cart-tracking"`,
        },
        page: {
          limit: 10,
        },
        sort: "-last_flaked",
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
