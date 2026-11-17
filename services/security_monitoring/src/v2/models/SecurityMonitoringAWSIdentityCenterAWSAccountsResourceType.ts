import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `aws_identity_center_aws_accounts`.
 */
export type SecurityMonitoringAWSIdentityCenterAWSAccountsResourceType =
  | typeof AWS_IDENTITY_CENTER_AWS_ACCOUNTS
  | UnparsedObject;
export const AWS_IDENTITY_CENTER_AWS_ACCOUNTS =
  "aws_identity_center_aws_accounts";
