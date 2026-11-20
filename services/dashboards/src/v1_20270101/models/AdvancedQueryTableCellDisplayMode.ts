import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type AdvancedQueryTableCellDisplayMode =
  | typeof NUMBER
  | typeof TEXT
  | typeof BAR
  | UnparsedObject;
export const NUMBER = "number";
export const TEXT = "text";
export const BAR = "bar";
