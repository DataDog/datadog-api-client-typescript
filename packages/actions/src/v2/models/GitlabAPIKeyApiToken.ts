import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GitlabAPIKey` `api_token`.
 */
export type GitlabAPIKeyApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
