/**
 * Search flaky tests returns "OK" response with specific cursor
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
          query: "*",
        },
        page: {
          cursor:
            "Q29udGludW91cyBUZXN0aW5nLltETyBOT1QgREVMRVRFXVtPTi1ERU1BTkQgRlVOQ1RJT05BTElUSUVTXVtPVkVSUklERV0gRXh0cmFWYXJpYWJsZXM=",
          limit: 2,
        },
        sort: "fqn",
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
