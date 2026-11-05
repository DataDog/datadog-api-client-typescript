import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ClickupAPIKeyUpdate` `api_token`.
 */
export type ClickupAPIKeyUpdateApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
