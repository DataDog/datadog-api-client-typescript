/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Metric for user journey funnel compute. `__dd.conversion` and `__dd.conversion_rate` accept `count` (unique users/sessions) and `cardinality` (total users/sessions) as aggregations.
 */

export type ProductAnalyticsFunnelComputeMetric =
  | typeof CONVERSION
  | typeof CONVERSION_RATE
  | UnparsedObject;
export const CONVERSION = "__dd.conversion";
export const CONVERSION_RATE = "__dd.conversion_rate";
