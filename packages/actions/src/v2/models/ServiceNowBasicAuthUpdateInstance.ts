import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `ServiceNowBasicAuthUpdate` `instance`.
 */
export type ServiceNowBasicAuthUpdateInstance =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
