import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for the bulk delete Synthetic tests response, `delete_tests`.
 */
export type DeletedTestsResponseType = typeof DELETE_TESTS | UnparsedObject;
export const DELETE_TESTS = "delete_tests";
