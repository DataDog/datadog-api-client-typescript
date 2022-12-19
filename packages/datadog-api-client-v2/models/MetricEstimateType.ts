/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Estimate type based on the queried configuration. By default, `count_or_gauge` is returned. `distribution` is returned for distribution metrics without percentiles enabled. Lastly, `percentile` is returned if `filter[pct]=true` is queried with a distribution metric.
 */

export type MetricEstimateType =
  | typeof COUNT_OR_GAUGE
  | typeof DISTRIBUTION
  | typeof PERCENTILE
  | UnparsedObject;
export const COUNT_OR_GAUGE = "count_or_gauge";
export const DISTRIBUTION = "distribution";
export const PERCENTILE = "percentile";
