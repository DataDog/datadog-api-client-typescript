import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The sort parameters when querying events.
 */
export type EventsSort =
  | typeof TIMESTAMP_ASCENDING
  | typeof TIMESTAMP_DESCENDING
  | UnparsedObject;
export const TIMESTAMP_ASCENDING = "timestamp";
export const TIMESTAMP_DESCENDING = "-timestamp";
