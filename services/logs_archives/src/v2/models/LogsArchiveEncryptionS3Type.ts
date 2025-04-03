import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of S3 encryption for a destination.
 */
export type LogsArchiveEncryptionS3Type =
  | typeof NO_OVERRIDE
  | typeof SSE_S3
  | typeof SSE_KMS
  | UnparsedObject;
export const NO_OVERRIDE = "NO_OVERRIDE";
export const SSE_S3 = "SSE_S3";
export const SSE_KMS = "SSE_KMS";
