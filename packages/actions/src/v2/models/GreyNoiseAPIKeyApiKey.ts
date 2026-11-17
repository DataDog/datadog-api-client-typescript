import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `GreyNoiseAPIKey` `api_key`.
 */
export type GreyNoiseAPIKeyApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
