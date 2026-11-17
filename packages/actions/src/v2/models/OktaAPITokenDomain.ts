import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OktaAPIToken` `domain`.
 */
export type OktaAPITokenDomain =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
