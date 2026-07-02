import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Server-side encryption type for Amazon S3.
 */
export type ObservabilityPipelineAmazonS3DestinationServerSideEncryption =
  | typeof AWS_KMS
  | typeof AES256
  | UnparsedObject;
export const AWS_KMS = "aws:kms";
export const AES256 = "AES256";
