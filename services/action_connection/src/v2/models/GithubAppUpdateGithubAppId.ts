import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The numeric ID of the GitHub App.
 */
export type GithubAppUpdateGithubAppId =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
