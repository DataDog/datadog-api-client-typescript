import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Join type for aggregate query join conditions.
 */
export type MonitorFormulaAndFunctionAggregateQueryJoinType =
  | typeof INNER
  | typeof LEFT
  | UnparsedObject;
export const INNER = "inner";
export const LEFT = "left";
