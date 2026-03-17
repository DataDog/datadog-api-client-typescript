import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression type. Always `snappy`.
 */
export type ObservabilityPipelineAmazonS3GenericCompressionSnappyType =
  | typeof SNAPPY
  | UnparsedObject;
export const SNAPPY = "snappy";
