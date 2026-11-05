import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GreyNoiseAPIKeyUpdate` `api_key`.
 */
export type GreyNoiseAPIKeyUpdateApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
