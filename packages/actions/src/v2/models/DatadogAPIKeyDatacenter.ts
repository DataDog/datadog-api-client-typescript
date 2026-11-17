import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `DatadogAPIKey` `datacenter`.
 */
export type DatadogAPIKeyDatacenter =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
