import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuthUpdate` `username`.
 */
export type ServiceNowBasicAuthUpdateUsername =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
