import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuth` `username`.
 */
export type ServiceNowBasicAuthUsername =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
