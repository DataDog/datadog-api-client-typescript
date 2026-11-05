import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ConfigCatSDKKey` `api_username`.
 */
export type ConfigCatSDKKeyApiUsername =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
