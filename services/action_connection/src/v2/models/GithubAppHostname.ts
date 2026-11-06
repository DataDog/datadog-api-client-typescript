import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * Hostname of the GitHub Enterprise Server. Omit this field for github.com.
 */
export type GithubAppHostname =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
