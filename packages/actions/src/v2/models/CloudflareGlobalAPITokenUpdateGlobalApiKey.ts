import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareGlobalAPITokenUpdate` `global_api_key`.
 */
export type CloudflareGlobalAPITokenUpdateGlobalApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
