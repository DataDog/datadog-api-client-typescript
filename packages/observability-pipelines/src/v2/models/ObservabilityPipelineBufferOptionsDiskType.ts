import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the buffer that will be configured, a disk buffer.
 */
export type ObservabilityPipelineBufferOptionsDiskType =
  | typeof DISK
  | UnparsedObject;
export const DISK = "disk";
