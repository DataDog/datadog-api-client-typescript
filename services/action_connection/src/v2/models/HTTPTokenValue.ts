import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `HTTPToken` `value`.
 */
export type HTTPTokenValue =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
