import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Unit of the time span.
 */
export type WidgetLiveSpanUnit =
  | typeof MINUTE
  | typeof HOUR
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | typeof YEAR
  | UnparsedObject;
export const MINUTE = "minute";
export const HOUR = "hour";
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
export const YEAR = "year";
