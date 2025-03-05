/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the on demand task. The value should always be `aws_resource`.
 */

export type AwsOnDemandType = typeof AWS_RESOURCE | UnparsedObject;
export const AWS_RESOURCE = "aws_resource";
