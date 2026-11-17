import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareAPIToken` `api_token`.
 */
export type CloudflareAPITokenApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
