import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric's type category.
 */
export type MetricTagConfigurationMetricTypeCategory =
  | typeof NON_DISTRIBUTION
  | typeof DISTRIBUTION
  | UnparsedObject;
export const NON_DISTRIBUTION = "non_distribution";
export const DISTRIBUTION = "distribution";
