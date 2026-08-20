/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
