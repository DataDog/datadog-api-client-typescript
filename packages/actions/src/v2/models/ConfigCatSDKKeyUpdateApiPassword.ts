import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ConfigCatSDKKeyUpdate` `api_password`.
 */
export type ConfigCatSDKKeyUpdateApiPassword =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
