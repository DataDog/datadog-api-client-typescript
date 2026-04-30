/**
 * Update Flaky Tests Management policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiUpdateFlakyTestsManagementPoliciesRequest =
  {
    body: {
      data: {
        attributes: {
          attemptToFix: {
            retries: 3,
          },
          disabled: {
            autoDisableRule: {
              enabled: false,
              status: "active",
              windowSeconds: 3600,
            },
            branchRule: {
              branches: ["main"],
              enabled: true,
              excludedBranches: [],
              excludedTestServices: [],
            },
            enabled: false,
            failureRateRule: {
              branches: [],
              enabled: false,
              minRuns: 10,
              status: "active",
              threshold: 0.5,
            },
          },
          quarantined: {
            autoQuarantineRule: {
              enabled: true,
              windowSeconds: 3600,
            },
            branchRule: {
              branches: ["main"],
              enabled: true,
              excludedBranches: [],
              excludedTestServices: [],
            },
            enabled: true,
            failureRateRule: {
              branches: ["main"],
              enabled: true,
              minRuns: 10,
              threshold: 0.5,
            },
          },
          repositoryId: "github.com/datadog/shopist",
        },
        type: "test_optimization_update_flaky_tests_management_policies_request",
      },
    },
  };

apiInstance
  .updateFlakyTestsManagementPolicies(params)
  .then((data: v2.TestOptimizationFlakyTestsManagementPoliciesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
