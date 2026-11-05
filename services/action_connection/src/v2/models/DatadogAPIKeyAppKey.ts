import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `DatadogAPIKey` `app_key`.
 */
export type DatadogAPIKeyAppKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
