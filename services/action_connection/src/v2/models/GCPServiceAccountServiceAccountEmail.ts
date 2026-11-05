import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GCPServiceAccount` `service_account_email`.
 */
export type GCPServiceAccountServiceAccountEmail =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
