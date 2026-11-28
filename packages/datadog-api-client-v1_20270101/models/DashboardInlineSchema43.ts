/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type DashboardInlineSchema43 =
  | typeof GLOBAL
  | typeof ALERT
  | typeof FULL_WEEK
  | typeof FULL_MONTH
  | typeof WEEK_TO_DATE
  | typeof MONTH_TO_DATE
  | typeof YEAR_TO_DATE
  | UnparsedObject;
export const GLOBAL = "global";
export const ALERT = "alert";
export const FULL_WEEK = "full_week";
export const FULL_MONTH = "full_month";
export const WEEK_TO_DATE = "week_to_date";
export const MONTH_TO_DATE = "month_to_date";
export const YEAR_TO_DATE = "year_to_date";
