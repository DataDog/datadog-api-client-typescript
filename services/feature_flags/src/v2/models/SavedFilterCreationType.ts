import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the saved filter was authored. RULES indicates rule-based authoring and LIST indicates list import. Both types return targeting rules and conditions.
 */
export type SavedFilterCreationType =
  | typeof RULES
  | typeof LIST
  | UnparsedObject;
export const RULES = "RULES";
export const LIST = "LIST";
