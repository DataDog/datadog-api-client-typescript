import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for an AWS IAM Identity Center entity context sync.
 */
export type SecurityMonitoringIntegrationTypeAWSIdentityCenter =
  | typeof AWS_IDENTITY_CENTER
  | UnparsedObject;
export const AWS_IDENTITY_CENTER = "AWS_IDENTITY_CENTER";
