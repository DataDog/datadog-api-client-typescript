import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the buffer type to configure. This option supports only a memory buffer.
 */
export type ObservabilityPipelineBufferOptionsMemoryType =
  | typeof MEMORY
  | UnparsedObject;
export const MEMORY = "memory";
