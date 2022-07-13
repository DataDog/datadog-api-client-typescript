/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type WidgetCompareTo =
  | typeof HOUR_BEFORE
  | typeof DAY_BEFORE
  | typeof WEEK_BEFORE
  | typeof MONTH_BEFORE;
export const HOUR_BEFORE = "hour_before";
export const DAY_BEFORE = "day_before";
export const WEEK_BEFORE = "week_before";
export const MONTH_BEFORE = "month_before";
