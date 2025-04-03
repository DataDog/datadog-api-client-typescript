import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Dashboard global time live_span selection
 */
export type DashboardGlobalTimeLiveSpan =
  | typeof PAST_FIFTEEN_MINUTES
  | typeof PAST_ONE_HOUR
  | typeof PAST_FOUR_HOURS
  | typeof PAST_ONE_DAY
  | typeof PAST_TWO_DAYS
  | typeof PAST_ONE_WEEK
  | typeof PAST_ONE_MONTH
  | typeof PAST_THREE_MONTHS
  | UnparsedObject;
export const PAST_FIFTEEN_MINUTES = "15m";
export const PAST_ONE_HOUR = "1h";
export const PAST_FOUR_HOURS = "4h";
export const PAST_ONE_DAY = "1d";
export const PAST_TWO_DAYS = "2d";
export const PAST_ONE_WEEK = "1w";
export const PAST_ONE_MONTH = "1mo";
export const PAST_THREE_MONTHS = "3mo";
