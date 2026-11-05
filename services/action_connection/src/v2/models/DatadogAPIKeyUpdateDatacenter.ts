import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `DatadogAPIKeyUpdate` `datacenter`.
 */
export type DatadogAPIKeyUpdateDatacenter =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
