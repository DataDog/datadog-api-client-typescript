import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ToplistBackendDefinitionStyleScaling =
  | typeof RELATIVE
  | typeof ABSOLUTE
  | UnparsedObject;
export const RELATIVE = "relative";
export const ABSOLUTE = "absolute";
