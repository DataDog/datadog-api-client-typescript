import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HasSearchBar =
  | typeof AUTO
  | typeof ALWAYS
  | typeof NEVER
  | UnparsedObject;
export const AUTO = "auto";
export const ALWAYS = "always";
export const NEVER = "never";
