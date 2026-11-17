import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The compression type. Always `zstd`.
 */
export type ObservabilityPipelineGoogleCloudStorageDestinationCompressionZstdType =
  typeof ZSTD | UnparsedObject;
export const ZSTD = "zstd";
