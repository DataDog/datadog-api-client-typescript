import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuth` `username`.
 */
export type ServiceNowBasicAuthUsername =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
