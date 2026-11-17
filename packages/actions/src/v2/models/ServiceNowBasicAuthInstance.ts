import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuth` `instance`.
 */
export type ServiceNowBasicAuthInstance =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
