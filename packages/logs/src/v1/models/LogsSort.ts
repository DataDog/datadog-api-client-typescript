import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Time-ascending `asc` or time-descending `desc` results.
 */
export type LogsSort =
  | typeof TIME_ASCENDING
  | typeof TIME_DESCENDING
  | UnparsedObject;
export const TIME_ASCENDING = "asc";
export const TIME_DESCENDING = "desc";
