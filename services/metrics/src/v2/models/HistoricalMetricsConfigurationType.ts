import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The historical metrics configuration resource type.
 */
export type HistoricalMetricsConfigurationType =
  | typeof HISTORICAL_METRICS_CONFIGURATIONS
  | UnparsedObject;
export const HISTORICAL_METRICS_CONFIGURATIONS =
  "historical_metrics_configurations";
