import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type StructuredAnalysisJoinJoinType =
  | typeof LEFT
  | typeof INNER
  | typeof ANTI
  | UnparsedObject;
export const LEFT = "left";
export const INNER = "inner";
export const ANTI = "anti";
