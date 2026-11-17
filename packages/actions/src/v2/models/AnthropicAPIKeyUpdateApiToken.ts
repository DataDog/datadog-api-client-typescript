import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `AnthropicAPIKeyUpdate` `api_token`.
 */
export type AnthropicAPIKeyUpdateApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
