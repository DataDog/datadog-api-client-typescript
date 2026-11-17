import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `FreshserviceAPIKeyUpdate` `api_key`.
 */
export type FreshserviceAPIKeyUpdateApiKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
