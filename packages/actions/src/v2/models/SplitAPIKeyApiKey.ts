import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `SplitAPIKey` `api_key`.
 */
export type SplitAPIKeyApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
