import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `HTTPToken` `value`.
 */
export type HTTPTokenValue =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
