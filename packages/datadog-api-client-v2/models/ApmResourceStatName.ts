/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The APM resource statistic to query.
 */

export type ApmResourceStatName =
  | typeof ERROR_RATE
  | typeof ERRORS
  | typeof HITS
  | typeof LATENCY_AVG
  | typeof LATENCY_MAX
  | typeof LATENCY_P50
  | typeof LATENCY_P75
  | typeof LATENCY_P90
  | typeof LATENCY_P95
  | typeof LATENCY_P99
  | typeof LATENCY_DISTRIBUTION
  | typeof TOTAL_TIME
  | UnparsedObject;
export const ERROR_RATE = "error_rate";
export const ERRORS = "errors";
export const HITS = "hits";
export const LATENCY_AVG = "latency_avg";
export const LATENCY_MAX = "latency_max";
export const LATENCY_P50 = "latency_p50";
export const LATENCY_P75 = "latency_p75";
export const LATENCY_P90 = "latency_p90";
export const LATENCY_P95 = "latency_p95";
export const LATENCY_P99 = "latency_p99";
export const LATENCY_DISTRIBUTION = "latency_distribution";
export const TOTAL_TIME = "total_time";
