import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * APM statistic.
 */
export type FormulaAndFunctionApmDependencyStatName =
  | typeof AVG_DURATION
  | typeof AVG_ROOT_DURATION
  | typeof AVG_SPANS_PER_TRACE
  | typeof ERROR_RATE
  | typeof PCT_EXEC_TIME
  | typeof PCT_OF_TRACES
  | typeof TOTAL_TRACES_COUNT
  | UnparsedObject;
export const AVG_DURATION = "avg_duration";
export const AVG_ROOT_DURATION = "avg_root_duration";
export const AVG_SPANS_PER_TRACE = "avg_spans_per_trace";
export const ERROR_RATE = "error_rate";
export const PCT_EXEC_TIME = "pct_exec_time";
export const PCT_OF_TRACES = "pct_of_traces";
export const TOTAL_TRACES_COUNT = "total_traces_count";
