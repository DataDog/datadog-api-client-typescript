import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Compression algorithm for log events.
 */
export type ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm =
  typeof GZIP | typeof ZLIB | UnparsedObject;
export const GZIP = "gzip";
export const ZLIB = "zlib";
