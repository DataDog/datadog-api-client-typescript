import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Behavior when the buffer is full (block and stop accepting new events, or drop new events)
 */
export type ObservabilityPipelineBufferOptionsWhenFull =
  | typeof BLOCK
  | typeof DROP_NEWEST
  | UnparsedObject;
export const BLOCK = "block";
export const DROP_NEWEST = "drop_newest";
