import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AWS Secrets Manager secret backend.
 */
export type ActionConnectionAWSSecretsManagerType =
  | typeof AWS_SECRETS_MANAGER
  | UnparsedObject;
export const AWS_SECRETS_MANAGER = "aws_secrets_manager";
