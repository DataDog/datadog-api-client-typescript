import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ConfigCatSDKKey` `sdk_key`.
 */
export type ConfigCatSDKKeySdkKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
