import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for get Flaky Tests Management policies request.
 * The value must always be `test_optimization_get_flaky_tests_management_policies_request`.
 */
export type TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType =
  | typeof TEST_OPTIMIZATION_GET_FLAKY_TESTS_MANAGEMENT_POLICIES_REQUEST
  | UnparsedObject;
export const TEST_OPTIMIZATION_GET_FLAKY_TESTS_MANAGEMENT_POLICIES_REQUEST =
  "test_optimization_get_flaky_tests_management_policies_request";
