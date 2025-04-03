import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of AWS CUR config Post Request.
 */
export type AwsCURConfigPostRequestType =
  | typeof AWS_CUR_CONFIG_POST_REQUEST
  | UnparsedObject;
export const AWS_CUR_CONFIG_POST_REQUEST = "aws_cur_config_post_request";
