import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type Comparator =
  | typeof EQ
  | typeof GT
  | typeof GT_EQ
  | typeof LT
  | typeof LT_EQ
  | UnparsedObject;
export const EQ = "=";
export const GT = ">";
export const GT_EQ = ">=";
export const LT = "<";
export const LT_EQ = "<=";
