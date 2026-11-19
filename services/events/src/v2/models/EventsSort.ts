import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The sort order of events. `-timestamp` returns the newest events first, which is the default, and `timestamp`
 * the oldest first. The client libraries reject any other value.
 */
export type EventsSort =
  | typeof TIMESTAMP_ASCENDING
  | typeof TIMESTAMP_DESCENDING
  | UnparsedObject;
export const TIMESTAMP_ASCENDING = "timestamp";
export const TIMESTAMP_DESCENDING = "-timestamp";
