import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The source type. Always `amazon_s3`.
 */
export type ObservabilityPipelineAmazonS3SourceType =
  | typeof AMAZON_S3
  | UnparsedObject;
export const AMAZON_S3 = "amazon_s3";
