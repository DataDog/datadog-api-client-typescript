import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `DatadogAPIKeyUpdate` `datacenter`.
 */
export type DatadogAPIKeyUpdateDatacenter =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
