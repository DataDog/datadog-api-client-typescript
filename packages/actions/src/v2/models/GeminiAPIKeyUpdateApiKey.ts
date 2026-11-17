import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GeminiAPIKeyUpdate` `api_key`.
 */
export type GeminiAPIKeyUpdateApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
