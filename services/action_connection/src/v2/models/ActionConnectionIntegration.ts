import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSIntegration } from "./AWSIntegration";
import { HTTPIntegration } from "./HTTPIntegration";

/**
 * The definition of `ActionConnectionIntegration` object.
 */
export type ActionConnectionIntegration =
  | AWSIntegration
  | HTTPIntegration
  | UnparsedObject;
