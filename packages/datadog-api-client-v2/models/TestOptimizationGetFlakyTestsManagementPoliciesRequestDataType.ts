/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for get Flaky Tests Management policies request.
 * The value must always be `test_optimization_get_flaky_tests_management_policies_request`.
 */

export type TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType =
  | typeof TEST_OPTIMIZATION_GET_FLAKY_TESTS_MANAGEMENT_POLICIES_REQUEST
  | UnparsedObject;
export const TEST_OPTIMIZATION_GET_FLAKY_TESTS_MANAGEMENT_POLICIES_REQUEST =
  "test_optimization_get_flaky_tests_management_policies_request";
