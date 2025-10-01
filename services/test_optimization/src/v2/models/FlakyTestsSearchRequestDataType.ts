import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `FlakyTestsSearchRequestDataType` object.
 */
export type FlakyTestsSearchRequestDataType =
  | typeof SEARCH_FLAKY_TESTS_REQUEST
  | UnparsedObject;
export const SEARCH_FLAKY_TESTS_REQUEST = "search_flaky_tests_request";
