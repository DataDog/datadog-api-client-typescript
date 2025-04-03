import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Timeframe used for the change comparison.
 */
export type WidgetCompareTo =
  | typeof HOUR_BEFORE
  | typeof DAY_BEFORE
  | typeof WEEK_BEFORE
  | typeof MONTH_BEFORE
  | UnparsedObject;
export const HOUR_BEFORE = "hour_before";
export const DAY_BEFORE = "day_before";
export const WEEK_BEFORE = "week_before";
export const MONTH_BEFORE = "month_before";
