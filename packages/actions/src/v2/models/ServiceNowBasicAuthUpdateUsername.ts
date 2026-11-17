import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuthUpdate` `username`.
 */
export type ServiceNowBasicAuthUpdateUsername =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
