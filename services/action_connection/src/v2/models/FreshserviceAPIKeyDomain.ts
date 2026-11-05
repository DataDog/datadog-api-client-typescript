import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `FreshserviceAPIKey` `domain`.
 */
export type FreshserviceAPIKeyDomain =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
