import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression type. Always `gzip`.
 */
export type ObservabilityPipelineGoogleCloudStorageDestinationCompressionGzipType =
  typeof GZIP | UnparsedObject;
export const GZIP = "gzip";
