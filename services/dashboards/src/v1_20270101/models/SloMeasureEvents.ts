import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SloMeasureEvents =
  | typeof GOOD_EVENTS
  | typeof BAD_EVENTS
  | UnparsedObject;
export const GOOD_EVENTS = "good_events";
export const BAD_EVENTS = "bad_events";
