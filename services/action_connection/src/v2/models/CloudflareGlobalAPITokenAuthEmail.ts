import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareGlobalAPIToken` `auth_email`.
 */
export type CloudflareGlobalAPITokenAuthEmail =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
