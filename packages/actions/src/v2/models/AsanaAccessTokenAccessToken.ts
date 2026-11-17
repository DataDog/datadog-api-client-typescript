import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `AsanaAccessToken` `access_token`.
 */
export type AsanaAccessTokenAccessToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
