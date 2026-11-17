import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ClickupAPIKeyUpdate` `api_token`.
 */
export type ClickupAPIKeyUpdateApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
