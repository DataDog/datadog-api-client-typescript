import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The installation ID of the GitHub App.
 */
export type GithubAppGithubInstallationId =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
