import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareGlobalAPIToken` `auth_email`.
 */
export type CloudflareGlobalAPITokenAuthEmail =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
