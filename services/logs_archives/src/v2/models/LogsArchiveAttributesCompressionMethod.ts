import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of compression for the archive.
 */
export type LogsArchiveAttributesCompressionMethod =
  | typeof GZIP
  | typeof ZSTD
  | UnparsedObject;
export const GZIP = "GZIP";
export const ZSTD = "ZSTD";
