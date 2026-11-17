import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuthUpdate` `password`.
 */
export type ServiceNowBasicAuthUpdatePassword =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
