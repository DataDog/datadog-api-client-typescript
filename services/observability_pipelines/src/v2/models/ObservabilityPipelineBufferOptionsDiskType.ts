import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the buffer type to configure. This option supports only a disk buffer.
 */
export type ObservabilityPipelineBufferOptionsDiskType =
  | typeof DISK
  | UnparsedObject;
export const DISK = "disk";
