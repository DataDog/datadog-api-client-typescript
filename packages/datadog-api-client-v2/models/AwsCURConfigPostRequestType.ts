/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of AWS CUR config Post Request.
 */

export type AwsCURConfigPostRequestType =
  | typeof AWS_CUR_CONFIG_POST_REQUEST
  | UnparsedObject;
export const AWS_CUR_CONFIG_POST_REQUEST = "aws_cur_config_post_request";
