import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sorting options for Pages. Prefix a field with `-` to sort in descending order.
 */
export type OnCallPagesSort =
  | typeof CREATED_AT_ASCENDING
  | typeof CREATED_AT_DESCENDING
  | typeof MODIFIED_AT_ASCENDING
  | typeof MODIFIED_AT_DESCENDING
  | typeof STATUS_ASCENDING
  | typeof STATUS_DESCENDING
  | typeof PRIORITY_ASCENDING
  | typeof PRIORITY_DESCENDING
  | UnparsedObject;
export const CREATED_AT_ASCENDING = "created_at";
export const CREATED_AT_DESCENDING = "-created_at";
export const MODIFIED_AT_ASCENDING = "modified_at";
export const MODIFIED_AT_DESCENDING = "-modified_at";
export const STATUS_ASCENDING = "status";
export const STATUS_DESCENDING = "-status";
export const PRIORITY_ASCENDING = "priority";
export const PRIORITY_DESCENDING = "-priority";
