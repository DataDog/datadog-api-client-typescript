import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSIntegration } from "./AWSIntegration";
import { DatadogIntegration } from "./DatadogIntegration";
import { HTTPIntegration } from "./HTTPIntegration";

/**
 * The definition of `ActionConnectionIntegration` object.
 */
export type ActionConnectionIntegration =
  | AWSIntegration
  | DatadogIntegration
  | HTTPIntegration
  | UnparsedObject;
