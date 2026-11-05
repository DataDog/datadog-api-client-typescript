import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `OktaAPITokenUpdate` `domain`.
 */
export type OktaAPITokenUpdateDomain =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
