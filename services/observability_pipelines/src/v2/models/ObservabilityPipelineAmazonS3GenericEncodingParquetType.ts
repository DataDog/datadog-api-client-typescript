import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The encoding type. Always `parquet`.
 */
export type ObservabilityPipelineAmazonS3GenericEncodingParquetType =
  | typeof PARQUET
  | UnparsedObject;
export const PARQUET = "parquet";
