/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AWS partition your AWS account is scoped to. Defaults to `aws`.
 * See [Partitions](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/partitions.html)
 * in the AWS documentation for more information.
 */

export type AWSAccountPartition =
  | typeof AWS
  | typeof AWS_CN
  | typeof AWS_US_GOV
  | UnparsedObject;
export const AWS = "aws";
export const AWS_CN = "aws-cn";
export const AWS_US_GOV = "aws-us-gov";
