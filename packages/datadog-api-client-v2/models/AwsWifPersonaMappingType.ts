/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type identifier for an AWS WIF persona mapping.
 */

export type AwsWifPersonaMappingType = typeof AWS_WIF_CONFIG | UnparsedObject;
export const AWS_WIF_CONFIG = "aws_wif_config";
