import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric's type category.
 */
export type MetricTagConfigurationMetricTypeCategory =
  | typeof NON_DISTRIBUTION
  | typeof DISTRIBUTION
  | typeof EXPONENTIAL_HISTOGRAM
  | typeof EXPLICIT_HISTOGRAM
  | UnparsedObject;
export const NON_DISTRIBUTION = "non_distribution";
export const DISTRIBUTION = "distribution";
export const EXPONENTIAL_HISTOGRAM = "exponential_histogram";
export const EXPLICIT_HISTOGRAM = "explicit_histogram";
