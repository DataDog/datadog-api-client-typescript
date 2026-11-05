import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `CircleCIAPIKey` `api_token`.
 */
export type CircleCIAPIKeyApiToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
