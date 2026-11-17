import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OktaAPITokenUpdate` `api_token`.
 */
export type OktaAPITokenUpdateApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
