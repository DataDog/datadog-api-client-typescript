import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";

/**
 * The definition of `ActionConnectionIntegrationUpdate` object.
 */
export type ActionConnectionIntegrationUpdate =
  | AWSIntegrationUpdate
  | HTTPIntegrationUpdate
  | UnparsedObject;
