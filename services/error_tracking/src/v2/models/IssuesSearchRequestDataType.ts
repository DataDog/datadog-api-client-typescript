import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssuesSearchRequestDataType =
  | typeof SEARCH_REQUEST
  | UnparsedObject;
export const SEARCH_REQUEST = "search_request";
