/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Define a time window.
 */

export type WidgetTimeWindows =
  | typeof SEVEN_DAYS
  | typeof THIRTY_DAYS
  | typeof NINETY_DAYS
  | typeof WEEK_TO_DATE
  | typeof PREVIOUS_WEEK
  | typeof MONTH_TO_DATE
  | typeof PREVIOUS_MONTH
  | typeof GLOBAL_TIME
  | UnparsedObject;
export const SEVEN_DAYS = "7d";
export const THIRTY_DAYS = "30d";
export const NINETY_DAYS = "90d";
export const WEEK_TO_DATE = "week_to_date";
export const PREVIOUS_WEEK = "previous_week";
export const MONTH_TO_DATE = "month_to_date";
export const PREVIOUS_MONTH = "previous_month";
export const GLOBAL_TIME = "global_time";
