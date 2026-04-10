import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for Flaky Tests Management policies response.
 * The value must always be `test_optimization_flaky_tests_management_policies`.
 */
export type TestOptimizationFlakyTestsManagementPoliciesType =
  | typeof TEST_OPTIMIZATION_FLAKY_TESTS_MANAGEMENT_POLICIES
  | UnparsedObject;
export const TEST_OPTIMIZATION_FLAKY_TESTS_MANAGEMENT_POLICIES =
  "test_optimization_flaky_tests_management_policies";
