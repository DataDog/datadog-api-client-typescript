import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ConfigCatSDKKeyUpdate` `sdk_key`.
 */
export type ConfigCatSDKKeyUpdateSdkKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
