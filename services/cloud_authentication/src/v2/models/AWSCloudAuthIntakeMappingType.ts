import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for AWS cloud authentication intake mapping.
 */
export type AWSCloudAuthIntakeMappingType =
  | typeof AWS_CLOUD_AUTH_INTAKE_MAPPING
  | UnparsedObject;
export const AWS_CLOUD_AUTH_INTAKE_MAPPING = "aws_cloud_auth_intake_mapping";
