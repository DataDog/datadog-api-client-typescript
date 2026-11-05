import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `AsanaAccessToken` `access_token`.
 */
export type AsanaAccessTokenAccessToken =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
