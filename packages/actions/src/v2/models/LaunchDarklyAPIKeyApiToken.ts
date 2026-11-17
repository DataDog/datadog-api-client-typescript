import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `LaunchDarklyAPIKey` `api_token`.
 */
export type LaunchDarklyAPIKeyApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
