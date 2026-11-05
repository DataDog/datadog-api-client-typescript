import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareAPIToken` `api_token`.
 */
export type CloudflareAPITokenApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
