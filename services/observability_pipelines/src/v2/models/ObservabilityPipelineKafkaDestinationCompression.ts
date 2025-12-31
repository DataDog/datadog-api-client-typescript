import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Compression codec for Kafka messages.
 */
export type ObservabilityPipelineKafkaDestinationCompression =
  | typeof NONE
  | typeof GZIP
  | typeof SNAPPY
  | typeof LZ4
  | typeof ZSTD
  | UnparsedObject;
export const NONE = "none";
export const GZIP = "gzip";
export const SNAPPY = "snappy";
export const LZ4 = "lz4";
export const ZSTD = "zstd";
