import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the on demand task. The value should always be `aws_resource`.
 */
export type AwsOnDemandType = typeof AWS_RESOURCE | UnparsedObject;
export const AWS_RESOURCE = "aws_resource";
