import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CircleCIAPIKey` `api_token`.
 */
export type CircleCIAPIKeyApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
