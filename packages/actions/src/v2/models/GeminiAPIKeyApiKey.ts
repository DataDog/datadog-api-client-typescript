import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GeminiAPIKey` `api_key`.
 */
export type GeminiAPIKeyApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
