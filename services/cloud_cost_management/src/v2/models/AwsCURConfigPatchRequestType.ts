import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of AWS CUR config Patch Request.
 */
export type AwsCURConfigPatchRequestType =
  | typeof AWS_CUR_CONFIG_PATCH_REQUEST
  | UnparsedObject;
export const AWS_CUR_CONFIG_PATCH_REQUEST = "aws_cur_config_patch_request";
