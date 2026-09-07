import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a request to create a DEM journey test suite.
 */
export type DemCreateJourneyTestSuiteRequestType =
  | typeof CREATE_TEST_SUITE_FOR_JOURNEY_REQUEST
  | UnparsedObject;
export const CREATE_TEST_SUITE_FOR_JOURNEY_REQUEST =
  "create_test_suite_for_journey_request";
