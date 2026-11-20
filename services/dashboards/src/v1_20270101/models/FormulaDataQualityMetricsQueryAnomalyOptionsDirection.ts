import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaDataQualityMetricsQueryAnomalyOptionsDirection =
  | typeof ABOVE
  | typeof BELOW
  | typeof BOTH
  | UnparsedObject;
export const ABOVE = "above";
export const BELOW = "below";
export const BOTH = "both";
