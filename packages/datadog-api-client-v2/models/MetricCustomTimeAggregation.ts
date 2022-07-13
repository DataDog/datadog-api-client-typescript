/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type MetricCustomTimeAggregation =
  | typeof AVG
  | typeof COUNT
  | typeof MAX
  | typeof MIN
  | typeof SUM;
export const AVG = "avg";
export const COUNT = "count";
export const MAX = "max";
export const MIN = "min";
export const SUM = "sum";
