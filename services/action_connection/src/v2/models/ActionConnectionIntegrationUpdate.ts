import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSIntegrationUpdate } from "./AWSIntegrationUpdate";
import { DatadogIntegrationUpdate } from "./DatadogIntegrationUpdate";
import { HTTPIntegrationUpdate } from "./HTTPIntegrationUpdate";

/**
 * The definition of `ActionConnectionIntegrationUpdate` object.
 */
export type ActionConnectionIntegrationUpdate =
  | AWSIntegrationUpdate
  | DatadogIntegrationUpdate
  | HTTPIntegrationUpdate
  | UnparsedObject;
