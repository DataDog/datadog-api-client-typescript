import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The cardinality tracking algorithm to use.
 */
export type ObservabilityPipelineTagCardinalityLimitProcessorTrackingModeMode =
  | typeof EXACT_FINGERPRINT
  | typeof PROBABILISTIC
  | UnparsedObject;
export const EXACT_FINGERPRINT = "exact_fingerprint";
export const PROBABILISTIC = "probabilistic";
