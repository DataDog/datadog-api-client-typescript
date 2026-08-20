import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Time unit for a fixed-length retention interval.
 */
export type ProductAnalyticsRetentionFixedTimeIntervalUnit =
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | UnparsedObject;
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
