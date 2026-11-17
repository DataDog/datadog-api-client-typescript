import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The minimal threshold type. The value should always be `always_keep`.
 */
export type ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType =
  typeof ALWAYS_KEEP | UnparsedObject;
export const ALWAYS_KEEP = "always_keep";
