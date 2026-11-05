import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GCPServiceAccountUpdate` `private_key`.
 */
export type GCPServiceAccountUpdatePrivateKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
