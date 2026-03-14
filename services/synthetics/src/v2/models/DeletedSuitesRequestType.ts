import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for the bulk delete Synthetic suites request, `delete_suites_request`.
 */
export type DeletedSuitesRequestType =
  | typeof DELETE_SUITES_REQUEST
  | UnparsedObject;
export const DELETE_SUITES_REQUEST = "delete_suites_request";
