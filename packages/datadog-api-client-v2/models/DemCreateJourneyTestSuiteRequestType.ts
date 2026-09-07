/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for a request to create a DEM journey test suite.
 */

export type DemCreateJourneyTestSuiteRequestType =
  | typeof CREATE_TEST_SUITE_FOR_JOURNEY_REQUEST
  | UnparsedObject;
export const CREATE_TEST_SUITE_FOR_JOURNEY_REQUEST =
  "create_test_suite_for_journey_request";
