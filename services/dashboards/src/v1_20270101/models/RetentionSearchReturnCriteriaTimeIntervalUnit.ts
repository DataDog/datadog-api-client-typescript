import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type RetentionSearchReturnCriteriaTimeIntervalUnit =
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | UnparsedObject;
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
