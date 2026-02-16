import { UnparsedObject } from "@datadog/datadog-api-client";

import { ExternalSecretsManagerOneOf } from "./ExternalSecretsManagerOneOf";

/**
 * External secrets manager configuration.
 */
export type ExternalSecretsManager =
  | ExternalSecretsManagerOneOf
  | UnparsedObject;
