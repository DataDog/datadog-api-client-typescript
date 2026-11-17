import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `FastlyAPIKey` `api_key`.
 */
export type FastlyAPIKeyApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
