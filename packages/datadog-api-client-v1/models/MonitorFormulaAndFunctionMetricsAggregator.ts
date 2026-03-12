/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Aggregator for metrics queries.
 */

export type MonitorFormulaAndFunctionMetricsAggregator =
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | typeof SUM
  | typeof LAST
  | typeof MEAN
  | typeof AREA
  | typeof L2NORM
  | typeof PERCENTILE
  | typeof STDDEV
  | typeof COUNT_UNIQUE
  | UnparsedObject;
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
export const SUM = "sum";
export const LAST = "last";
export const MEAN = "mean";
export const AREA = "area";
export const L2NORM = "l2norm";
export const PERCENTILE = "percentile";
export const STDDEV = "stddev";
export const COUNT_UNIQUE = "count_unique";
