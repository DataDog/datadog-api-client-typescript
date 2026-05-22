import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the per-metric override is applied. `tracked` enforces a custom limit; `excluded` skips the metric entirely.
 */
export type ObservabilityPipelineTagCardinalityLimitProcessorPerMetricMode =
  | typeof TRACKED
  | typeof EXCLUDED
  | UnparsedObject;
export const TRACKED = "tracked";
export const EXCLUDED = "excluded";
