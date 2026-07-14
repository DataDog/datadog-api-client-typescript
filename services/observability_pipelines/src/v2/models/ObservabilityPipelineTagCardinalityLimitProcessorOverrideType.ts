import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the override is applied. `limit_override` enforces a custom limit; `excluded` omits the metric or tag from cardinality tracking.
 */
export type ObservabilityPipelineTagCardinalityLimitProcessorOverrideType =
  | typeof LIMIT_OVERRIDE
  | typeof EXCLUDED
  | UnparsedObject;
export const LIMIT_OVERRIDE = "limit_override";
export const EXCLUDED = "excluded";
