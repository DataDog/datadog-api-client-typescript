import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaSemanticMode =
  | typeof NATIVE
  | typeof COMBINED
  | UnparsedObject;
export const NATIVE = "native";
export const COMBINED = "combined";
