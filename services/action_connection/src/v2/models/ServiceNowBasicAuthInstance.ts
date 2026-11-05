import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuth` `instance`.
 */
export type ServiceNowBasicAuthInstance =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
