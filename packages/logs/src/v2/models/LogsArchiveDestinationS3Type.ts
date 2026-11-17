import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the S3 archive destination.
 */
export type LogsArchiveDestinationS3Type = typeof S3 | UnparsedObject;
export const S3 = "s3";
