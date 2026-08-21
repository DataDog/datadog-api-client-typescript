import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparison operator applied to the graph filter value.
 */
export type ProductAnalyticsJourneySearchGraphFilterOperator =
  | typeof EQUAL
  | typeof LESS_THAN
  | typeof GREATER_THAN
  | typeof LESS_THAN_OR_EQUAL
  | typeof GREATER_THAN_OR_EQUAL
  | UnparsedObject;
export const EQUAL = "=";
export const LESS_THAN = "<";
export const GREATER_THAN = ">";
export const LESS_THAN_OR_EQUAL = "<=";
export const GREATER_THAN_OR_EQUAL = ">=";
