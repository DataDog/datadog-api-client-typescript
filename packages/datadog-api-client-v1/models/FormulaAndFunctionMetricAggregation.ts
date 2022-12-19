/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The aggregation methods available for metrics queries.
 */

export type FormulaAndFunctionMetricAggregation =
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | typeof SUM
  | typeof LAST
  | typeof AREA
  | typeof L2NORM
  | typeof PERCENTILE
  | UnparsedObject;
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
export const SUM = "sum";
export const LAST = "last";
export const AREA = "area";
export const L2NORM = "l2norm";
export const PERCENTILE = "percentile";
