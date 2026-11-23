import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The sort order of events. `-timestamp` (the default) returns the newest events first, and `timestamp` returns
 * the oldest first. The client libraries reject any other value.
 */
export type EventsSort =
  | typeof TIMESTAMP_ASCENDING
  | typeof TIMESTAMP_DESCENDING
  | UnparsedObject;
export const TIMESTAMP_ASCENDING = "timestamp";
export const TIMESTAMP_DESCENDING = "-timestamp";
