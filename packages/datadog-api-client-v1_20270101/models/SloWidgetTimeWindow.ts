/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SloWidgetTimeWindow =
  | typeof WEEK_TO_DATE
  | typeof MONTH_TO_DATE
  | typeof SEVEN_D
  | typeof THIRTY_D
  | typeof NINETY_D
  | typeof PREVIOUS_WEEK
  | typeof PREVIOUS_MONTH
  | typeof GLOBAL_TIME
  | UnparsedObject;
export const WEEK_TO_DATE = "week_to_date";
export const MONTH_TO_DATE = "month_to_date";
export const SEVEN_D = "7d";
export const THIRTY_D = "30d";
export const NINETY_D = "90d";
export const PREVIOUS_WEEK = "previous_week";
export const PREVIOUS_MONTH = "previous_month";
export const GLOBAL_TIME = "global_time";
