/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The type of aggregation to use.
 */

export type LogsMetricResponseComputeAggregationType =
  | typeof COUNT
  | typeof DISTRIBUTION
  | UnparsedObject;
export const COUNT = "count";
export const DISTRIBUTION = "distribution";
