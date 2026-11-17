import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * GitHub personal access token.
 */
export type GithubPersonalAccessTokenUpdateAccessToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
