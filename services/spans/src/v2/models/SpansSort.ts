import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort parameters when querying spans.
 */
export type SpansSort =
  | typeof TIMESTAMP_ASCENDING
  | typeof TIMESTAMP_DESCENDING
  | UnparsedObject;
export const TIMESTAMP_ASCENDING = "timestamp";
export const TIMESTAMP_DESCENDING = "-timestamp";
