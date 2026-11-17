import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OktaAPIToken` `api_token`.
 */
export type OktaAPITokenApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
