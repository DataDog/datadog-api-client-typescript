import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GCPServiceAccount` `private_key`.
 */
export type GCPServiceAccountPrivateKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
