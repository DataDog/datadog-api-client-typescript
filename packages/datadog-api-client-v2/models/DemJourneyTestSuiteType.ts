/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type identifier for DEM journey test suites.
 */

export type DemJourneyTestSuiteType =
  | typeof JOURNEY_TEST_SUITE
  | UnparsedObject;
export const JOURNEY_TEST_SUITE = "journey_test_suite";
