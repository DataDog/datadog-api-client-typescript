import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * Hostname of the GitHub Enterprise Server. Omit this field for github.com.
 */
export type GithubAppUpdateHostname =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
