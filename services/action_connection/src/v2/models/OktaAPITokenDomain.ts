import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OktaAPIToken` `domain`.
 */
export type OktaAPITokenDomain =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
