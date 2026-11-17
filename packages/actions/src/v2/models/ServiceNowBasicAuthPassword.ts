import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuth` `password`.
 */
export type ServiceNowBasicAuthPassword =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
