import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for AWS cloud authentication persona mapping
 */
export type AWSCloudAuthPersonaMappingType =
  | typeof AWS_CLOUD_AUTH_CONFIG
  | UnparsedObject;
export const AWS_CLOUD_AUTH_CONFIG = "aws_cloud_auth_config";
