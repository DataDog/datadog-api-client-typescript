/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Metric for User Journey formula compute. `__dd.conversion` and `__dd.conversion_rate` accept `count` and `cardinality` as aggregations. `__dd.time_to_convert` accepts `avg`, `median`, `pc75`, `pc95`, `pc98`, `pc99`, `min`, and `max`.
 */

export type UserJourneyFormulaComputeMetric =
  | typeof CONVERSION
  | typeof CONVERSION_RATE
  | typeof TIME_TO_CONVERT
  | UnparsedObject;
export const CONVERSION = "__dd.conversion";
export const CONVERSION_RATE = "__dd.conversion_rate";
export const TIME_TO_CONVERT = "__dd.time_to_convert";
