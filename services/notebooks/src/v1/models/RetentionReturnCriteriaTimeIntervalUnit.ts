import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Unit of time for retention return criteria interval.
 */
export type RetentionReturnCriteriaTimeIntervalUnit =
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | UnparsedObject;
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
