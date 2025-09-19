/**
 * Search flaky tests returns "OK" response with pagination
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
          query: `flaky_test_state:active @git.repository.id_v2:"github.com/datadog/shopist"`,
        },
        page: {
          cursor:
            "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
          limit: 25,
        },
        sort: "failure_rate",
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
