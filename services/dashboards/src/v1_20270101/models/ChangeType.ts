import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ChangeType =
  | typeof BOTH
  | typeof RELATIVE
  | typeof ABSOLUTE
  | UnparsedObject;
export const BOTH = "both";
export const RELATIVE = "relative";
export const ABSOLUTE = "absolute";
