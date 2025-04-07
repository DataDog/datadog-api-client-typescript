import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparator to apply.
 */
export type WidgetComparator =
  | typeof EQUAL_TO
  | typeof GREATER_THAN
  | typeof GREATER_THAN_OR_EQUAL_TO
  | typeof LESS_THAN
  | typeof LESS_THAN_OR_EQUAL_TO
  | UnparsedObject;
export const EQUAL_TO = "=";
export const GREATER_THAN = ">";
export const GREATER_THAN_OR_EQUAL_TO = ">=";
export const LESS_THAN = "<";
export const LESS_THAN_OR_EQUAL_TO = "<=";
