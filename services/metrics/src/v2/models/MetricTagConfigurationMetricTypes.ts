import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric's type.
 */
export type MetricTagConfigurationMetricTypes =
  | typeof GAUGE
  | typeof COUNT
  | typeof RATE
  | typeof DISTRIBUTION
  | UnparsedObject;
export const GAUGE = "gauge";
export const COUNT = "count";
export const RATE = "rate";
export const DISTRIBUTION = "distribution";
