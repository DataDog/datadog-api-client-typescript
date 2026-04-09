/**
 * Get Flaky Tests Management policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getFlakyTestsManagementPolicies"] = true;
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiGetFlakyTestsManagementPoliciesRequest = {
  body: {
    data: {
      attributes: {
        repositoryId: "github.com/datadog/shopist",
      },
      type: "test_optimization_get_flaky_tests_management_policies_request",
    },
  },
};

apiInstance
  .getFlakyTestsManagementPolicies(params)
  .then((data: v2.TestOptimizationFlakyTestsManagementPoliciesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
