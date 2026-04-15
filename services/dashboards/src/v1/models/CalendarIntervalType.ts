import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of calendar interval.
 */
export type CalendarIntervalType =
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | typeof YEAR
  | typeof QUARTER
  | typeof MINUTE
  | typeof HOUR
  | UnparsedObject;
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
export const YEAR = "year";
export const QUARTER = "quarter";
export const MINUTE = "minute";
export const HOUR = "hour";
