import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ActionConnectionAWSSecretsManagerReference } from "./ActionConnectionAWSSecretsManagerReference";

/**
 * The `FreshserviceAPIKeyUpdate` `domain`.
 */
export type FreshserviceAPIKeyUpdateDomain =
  | string
  | ActionConnectionAWSSecretsManagerReference
  | UnparsedObject;
