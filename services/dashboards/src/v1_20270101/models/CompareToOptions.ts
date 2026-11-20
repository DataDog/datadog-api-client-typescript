import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CompareToOptions =
  | typeof HOUR_BEFORE
  | typeof DAY_BEFORE
  | typeof WEEK_BEFORE
  | typeof MONTH_BEFORE
  | UnparsedObject;
export const HOUR_BEFORE = "hour_before";
export const DAY_BEFORE = "day_before";
export const WEEK_BEFORE = "week_before";
export const MONTH_BEFORE = "month_before";
