import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `AsanaAccessTokenUpdate` `access_token`.
 */
export type AsanaAccessTokenUpdateAccessToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
