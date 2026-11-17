import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The minimal threshold type. The value should always be `threshold`.
 */
export type ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytesType =
  typeof THRESHOLD | UnparsedObject;
export const THRESHOLD = "threshold";
