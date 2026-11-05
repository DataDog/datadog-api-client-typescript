import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ConfigCatSDKKeyUpdate` `api_username`.
 */
export type ConfigCatSDKKeyUpdateApiUsername =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
