import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `amazon_s3`.
 */
export type ObservabilityPipelineAmazonS3DestinationType =
  | typeof AMAZON_S3
  | UnparsedObject;
export const AMAZON_S3 = "amazon_s3";
