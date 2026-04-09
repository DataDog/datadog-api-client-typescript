import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression algorithm applied when sending data to Elasticsearch.
 */
export type ObservabilityPipelineElasticsearchDestinationCompressionAlgorithm =
  | typeof NONE
  | typeof GZIP
  | typeof ZLIB
  | typeof ZSTD
  | typeof SNAPPY
  | UnparsedObject;
export const NONE = "none";
export const GZIP = "gzip";
export const ZLIB = "zlib";
export const ZSTD = "zstd";
export const SNAPPY = "snappy";
