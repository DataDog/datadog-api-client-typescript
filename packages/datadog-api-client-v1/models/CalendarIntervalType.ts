/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
