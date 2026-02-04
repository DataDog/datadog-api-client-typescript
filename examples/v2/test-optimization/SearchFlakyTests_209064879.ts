/**
 * Search flaky tests returns "OK" response with history
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
          limit: 10,
        },
        sort: "fqn",
        includeHistory: true,
      },
      type: "search_flaky_tests_request",
    },
  },
};

apiInstance
  .searchFlakyTests(params)
  .then((data: v2.FlakyTestsSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
