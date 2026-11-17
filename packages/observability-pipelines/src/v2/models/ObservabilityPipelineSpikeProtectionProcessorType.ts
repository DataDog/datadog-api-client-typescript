import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. The value should always be `spike_protection`.
 */
export type ObservabilityPipelineSpikeProtectionProcessorType =
  | typeof SPIKE_PROTECTION
  | UnparsedObject;
export const SPIKE_PROTECTION = "spike_protection";
