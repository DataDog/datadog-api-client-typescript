import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * PEM-encoded RSA private key for the GitHub App.
 */
export type GithubAppPrivateKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
