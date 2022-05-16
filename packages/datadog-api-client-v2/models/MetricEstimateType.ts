/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type MetricEstimateType =
  | typeof COUNT_OR_GAUGE
  | typeof DISTRIBUTION
  | typeof PERCENTILE;
export const COUNT_OR_GAUGE = "count_or_gauge";
export const DISTRIBUTION = "distribution";
export const PERCENTILE = "percentile";
