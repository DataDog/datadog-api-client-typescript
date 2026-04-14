/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of comparison duration.
 */

export type FunnelComparisonDurationType =
  | typeof PREVIOUS_TIMEFRAME
  | typeof CUSTOM_TIMEFRAME
  | typeof PREVIOUS_DAY
  | typeof PREVIOUS_WEEK
  | typeof PREVIOUS_MONTH
  | UnparsedObject;
export const PREVIOUS_TIMEFRAME = "previous_timeframe";
export const CUSTOM_TIMEFRAME = "custom_timeframe";
export const PREVIOUS_DAY = "previous_day";
export const PREVIOUS_WEEK = "previous_week";
export const PREVIOUS_MONTH = "previous_month";
