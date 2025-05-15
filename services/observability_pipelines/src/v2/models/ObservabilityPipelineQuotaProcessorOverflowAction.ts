import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action to take when the quota is exceeded. Options:
 * - `drop`: Drop the event.
 * - `no_action`: Let the event pass through.
 * - `overflow_routing`: Route to an overflow destination.
 */
export type ObservabilityPipelineQuotaProcessorOverflowAction =
  | typeof DROP
  | typeof NO_ACTION
  | typeof OVERFLOW_ROUTING
  | UnparsedObject;
export const DROP = "drop";
export const NO_ACTION = "no_action";
export const OVERFLOW_ROUTING = "overflow_routing";
