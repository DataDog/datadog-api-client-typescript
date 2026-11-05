import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CloudflareGlobalAPITokenUpdate` `auth_email`.
 */
export type CloudflareGlobalAPITokenUpdateAuthEmail =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
