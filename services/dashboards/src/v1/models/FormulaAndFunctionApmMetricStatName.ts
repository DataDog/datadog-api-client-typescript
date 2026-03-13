import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * APM metric stat name.
 */
export type FormulaAndFunctionApmMetricStatName =
  | typeof ERRORS
  | typeof ERROR_RATE
  | typeof ERRORS_PER_SECOND
  | typeof LATENCY_AVG
  | typeof LATENCY_MAX
  | typeof LATENCY_P50
  | typeof LATENCY_P75
  | typeof LATENCY_P90
  | typeof LATENCY_P95
  | typeof LATENCY_P99
  | typeof LATENCY_P999
  | typeof LATENCY_DISTRIBUTION
  | typeof HITS
  | typeof HITS_PER_SECOND
  | typeof TOTAL_TIME
  | typeof APDEX
  | UnparsedObject;
export const ERRORS = "errors";
export const ERROR_RATE = "error_rate";
export const ERRORS_PER_SECOND = "errors_per_second";
export const LATENCY_AVG = "latency_avg";
export const LATENCY_MAX = "latency_max";
export const LATENCY_P50 = "latency_p50";
export const LATENCY_P75 = "latency_p75";
export const LATENCY_P90 = "latency_p90";
export const LATENCY_P95 = "latency_p95";
export const LATENCY_P99 = "latency_p99";
export const LATENCY_P999 = "latency_p999";
export const LATENCY_DISTRIBUTION = "latency_distribution";
export const HITS = "hits";
export const HITS_PER_SECOND = "hits_per_second";
export const TOTAL_TIME = "total_time";
export const APDEX = "apdex";
