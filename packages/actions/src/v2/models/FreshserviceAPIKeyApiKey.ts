import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `FreshserviceAPIKey` `api_key`.
 */
export type FreshserviceAPIKeyApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
