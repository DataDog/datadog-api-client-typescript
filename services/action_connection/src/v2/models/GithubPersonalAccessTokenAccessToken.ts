import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * GitHub personal access token.
 */
export type GithubPersonalAccessTokenAccessToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
