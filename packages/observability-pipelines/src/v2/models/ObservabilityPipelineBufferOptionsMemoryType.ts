import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the buffer that will be configured, a memory buffer.
 */
export type ObservabilityPipelineBufferOptionsMemoryType =
  | typeof MEMORY
  | UnparsedObject;
export const MEMORY = "memory";
