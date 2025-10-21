import { UnparsedObject } from "@datadog/datadog-api-client";

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
