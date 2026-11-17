import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GCPServiceAccountUpdate` `service_account_email`.
 */
export type GCPServiceAccountUpdateServiceAccountEmail =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
