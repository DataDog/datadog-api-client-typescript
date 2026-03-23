import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for the bulk delete Synthetic tests request, `delete_tests_request`.
 */
export type DeletedTestsRequestType =
  | typeof DELETE_TESTS_REQUEST
  | UnparsedObject;
export const DELETE_TESTS_REQUEST = "delete_tests_request";
