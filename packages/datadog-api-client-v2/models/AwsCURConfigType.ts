/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of AWS CUR config.
 */

export type AwsCURConfigType = typeof AWS_CUR_CONFIG | UnparsedObject;
export const AWS_CUR_CONFIG = "aws_cur_config";
