import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `FastlyAPIKeyUpdate` `api_key`.
 */
export type FastlyAPIKeyUpdateApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
