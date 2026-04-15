import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of comparison duration.
 */
export type FunnelComparisonDurationType =
  | typeof PREVIOUS_TIMEFRAME
  | typeof CUSTOM_TIMEFRAME
  | typeof PREVIOUS_DAY
  | typeof PREVIOUS_WEEK
  | typeof PREVIOUS_MONTH
  | UnparsedObject;
export const PREVIOUS_TIMEFRAME = "previous_timeframe";
export const CUSTOM_TIMEFRAME = "custom_timeframe";
export const PREVIOUS_DAY = "previous_day";
export const PREVIOUS_WEEK = "previous_week";
export const PREVIOUS_MONTH = "previous_month";
