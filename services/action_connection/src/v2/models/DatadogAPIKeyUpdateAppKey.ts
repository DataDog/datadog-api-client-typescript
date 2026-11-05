import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `DatadogAPIKeyUpdate` `app_key`.
 */
export type DatadogAPIKeyUpdateAppKey =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
