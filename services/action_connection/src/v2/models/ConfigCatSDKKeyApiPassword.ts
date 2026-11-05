import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ConfigCatSDKKey` `api_password`.
 */
export type ConfigCatSDKKeyApiPassword =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
