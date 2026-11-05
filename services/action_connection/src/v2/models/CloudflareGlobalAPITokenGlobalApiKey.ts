import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareGlobalAPIToken` `global_api_key`.
 */
export type CloudflareGlobalAPITokenGlobalApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
