import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssuesSearchResultType =
  | typeof ERROR_TRACKING_SEARCH_RESULT
  | UnparsedObject;
export const ERROR_TRACKING_SEARCH_RESULT = "error_tracking_search_result";
