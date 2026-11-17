import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OpenAIAPIKeyUpdate` `api_token`.
 */
export type OpenAIAPIKeyUpdateApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
