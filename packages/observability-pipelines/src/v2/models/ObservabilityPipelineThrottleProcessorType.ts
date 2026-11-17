import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. The value should always be `throttle`.
 */
export type ObservabilityPipelineThrottleProcessorType =
  | typeof THROTTLE
  | UnparsedObject;
export const THROTTLE = "throttle";
