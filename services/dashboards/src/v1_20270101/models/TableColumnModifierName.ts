import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TableColumnModifierName =
  | typeof FILL
  | typeof AS_COUNT
  | typeof AS_RATE
  | typeof WEIGHTED
  | typeof ROLLUP
  | UnparsedObject;
export const FILL = "fill";
export const AS_COUNT = "as_count";
export const AS_RATE = "as_rate";
export const WEIGHTED = "weighted";
export const ROLLUP = "rollup";
