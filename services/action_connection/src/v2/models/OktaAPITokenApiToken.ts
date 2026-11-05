import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OktaAPIToken` `api_token`.
 */
export type OktaAPITokenApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
