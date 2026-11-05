import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuth` `password`.
 */
export type ServiceNowBasicAuthPassword =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
