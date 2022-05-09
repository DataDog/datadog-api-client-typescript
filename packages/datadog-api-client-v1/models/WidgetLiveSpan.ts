/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type WidgetLiveSpan =
  | typeof PAST_ONE_MINUTE
  | typeof PAST_FIVE_MINUTES
  | typeof PAST_TEN_MINUTES
  | typeof PAST_FIFTEEN_MINUTES
  | typeof PAST_THIRTY_MINUTES
  | typeof PAST_ONE_HOUR
  | typeof PAST_FOUR_HOURS
  | typeof PAST_ONE_DAY
  | typeof PAST_TWO_DAYS
  | typeof PAST_ONE_WEEK
  | typeof PAST_ONE_MONTH
  | typeof PAST_THREE_MONTHS
  | typeof PAST_SIX_MONTHS
  | typeof PAST_ONE_YEAR
  | typeof ALERT;
export const PAST_ONE_MINUTE = "1m";
export const PAST_FIVE_MINUTES = "5m";
export const PAST_TEN_MINUTES = "10m";
export const PAST_FIFTEEN_MINUTES = "15m";
export const PAST_THIRTY_MINUTES = "30m";
export const PAST_ONE_HOUR = "1h";
export const PAST_FOUR_HOURS = "4h";
export const PAST_ONE_DAY = "1d";
export const PAST_TWO_DAYS = "2d";
export const PAST_ONE_WEEK = "1w";
export const PAST_ONE_MONTH = "1mo";
export const PAST_THREE_MONTHS = "3mo";
export const PAST_SIX_MONTHS = "6mo";
export const PAST_ONE_YEAR = "1y";
export const ALERT = "alert";
