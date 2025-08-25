/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of AWS CUR config Patch Request.
 */

export type AwsCURConfigPatchRequestType =
  | typeof AWS_CUR_CONFIG_PATCH_REQUEST
  | UnparsedObject;
export const AWS_CUR_CONFIG_PATCH_REQUEST = "aws_cur_config_patch_request";
