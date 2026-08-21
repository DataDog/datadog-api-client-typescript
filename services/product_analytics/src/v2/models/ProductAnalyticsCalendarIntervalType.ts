import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Calendar unit used to bucket cohorts.
 */
export type ProductAnalyticsCalendarIntervalType =
  | typeof MINUTE
  | typeof HOUR
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | typeof QUARTER
  | typeof YEAR
  | UnparsedObject;
export const MINUTE = "minute";
export const HOUR = "hour";
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
export const QUARTER = "quarter";
export const YEAR = "year";
