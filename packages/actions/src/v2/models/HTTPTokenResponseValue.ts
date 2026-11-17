import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `HTTPTokenResponse` `value`.
 */
export type HTTPTokenResponseValue =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
