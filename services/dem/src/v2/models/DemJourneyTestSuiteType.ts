import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for DEM journey test suites.
 */
export type DemJourneyTestSuiteType =
  | typeof JOURNEY_TEST_SUITE
  | UnparsedObject;
export const JOURNEY_TEST_SUITE = "journey_test_suite";
