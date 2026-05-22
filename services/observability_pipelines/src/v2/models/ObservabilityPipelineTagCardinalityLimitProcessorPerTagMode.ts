import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the per-tag override is applied. `limit_override` enforces a custom limit on the tag; `excluded` skips the tag from cardinality tracking.
 */
export type ObservabilityPipelineTagCardinalityLimitProcessorPerTagMode =
  | typeof LIMIT_OVERRIDE
  | typeof EXCLUDED
  | UnparsedObject;
export const LIMIT_OVERRIDE = "limit_override";
export const EXCLUDED = "excluded";
