import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric's type. Contact your Customer Success Manager (CSM) for instructions on how to use the histogram types.
 */
export type MetricTagConfigurationMetricTypes =
  | typeof GAUGE
  | typeof COUNT
  | typeof RATE
  | typeof DISTRIBUTION
  | typeof EXPONENTIAL_HISTOGRAM
  | typeof EXPLICIT_HISTOGRAM
  | UnparsedObject;
export const GAUGE = "gauge";
export const COUNT = "count";
export const RATE = "rate";
export const DISTRIBUTION = "distribution";
export const EXPONENTIAL_HISTOGRAM = "exponential_histogram";
export const EXPLICIT_HISTOGRAM = "explicit_histogram";
