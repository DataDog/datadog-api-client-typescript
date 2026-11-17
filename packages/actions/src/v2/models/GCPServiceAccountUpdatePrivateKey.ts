import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GCPServiceAccountUpdate` `private_key`.
 */
export type GCPServiceAccountUpdatePrivateKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
