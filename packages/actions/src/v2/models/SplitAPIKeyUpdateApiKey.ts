import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `SplitAPIKeyUpdate` `api_key`.
 */
export type SplitAPIKeyUpdateApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
