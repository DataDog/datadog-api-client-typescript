import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuthUpdate` `password`.
 */
export type ServiceNowBasicAuthUpdatePassword =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
