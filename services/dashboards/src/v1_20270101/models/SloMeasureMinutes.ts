import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SloMeasureMinutes =
  | typeof GOOD_MINUTES
  | typeof BAD_MINUTES
  | UnparsedObject;
export const GOOD_MINUTES = "good_minutes";
export const BAD_MINUTES = "bad_minutes";
