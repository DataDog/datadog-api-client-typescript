import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `amazon_s3_generic`.
 */
export type ObservabilityPipelineAmazonS3GenericDestinationType =
  | typeof GENERIC_ARCHIVES_S3
  | UnparsedObject;
export const GENERIC_ARCHIVES_S3 = "amazon_s3_generic";
