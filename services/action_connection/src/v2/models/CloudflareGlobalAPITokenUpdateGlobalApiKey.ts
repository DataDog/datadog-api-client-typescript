import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareGlobalAPITokenUpdate` `global_api_key`.
 */
export type CloudflareGlobalAPITokenUpdateGlobalApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
