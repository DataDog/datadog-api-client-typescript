import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * AWS CUR config resource type.
 */
export type AwsCurConfigResponseDataType =
  | typeof AWS_CUR_CONFIG
  | UnparsedObject;
export const AWS_CUR_CONFIG = "aws_cur_config";
