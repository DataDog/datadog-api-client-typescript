import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ClickupAPIKey` `api_token`.
 */
export type ClickupAPIKeyApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
