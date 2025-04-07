import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of AWS CUR config.
 */
export type AwsCURConfigType = typeof AWS_CUR_CONFIG | UnparsedObject;
export const AWS_CUR_CONFIG = "aws_cur_config";
