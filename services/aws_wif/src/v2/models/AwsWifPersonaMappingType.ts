import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for an AWS WIF persona mapping.
 */
export type AwsWifPersonaMappingType = typeof AWS_WIF_CONFIG | UnparsedObject;
export const AWS_WIF_CONFIG = "aws_wif_config";
